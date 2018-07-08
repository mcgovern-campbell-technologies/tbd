const neo4j = require('neo4j-driver').v1;
const _ = require('lodash');
const stringifyObject = require('stringify-object');
const {
  contractorHasNecessaryProps,
  extractNodes,
  newExtractNodes,
  extractRows,
  extractNodesWithRelatedNodes,
  mapTypeToQuery,
  createSetChain,
} = require('./databaseUtilities');
const { startUpScript, massDelete } = require('./startUpCypherScript')

class GraphApi {
  constructor(username, password, connection) {
    this.driver = neo4j.driver(connection, neo4j.auth.basic(username, password));

    // const session = this.driver.session();
    // session
    //   .run(massDelete)
    //   .then(result => {
    //     return session
    //       .run(startUpScript)
    //   })
    //   .then(result => {
    //     console.log('==== DATABASE WAS DELETED AND RESET ====')
    //   })
  }

  closeDriver() {
    this.driver.close();
  }

  getNodeById(id) {
    // TODO: update this method to match new schema

    const session = this.driver.session();
    return session
      .run(`MATCH (n) where id(n) = ${id} RETURN n`)
      .then(result => {
        const { records } = result;
        return extractNodes(records)[0];
      })
  }

  createLocation(reqBody) {
    // TODO: update this method to match new schema

    const {locationName, companyId} = reqBody;
    const session = this.driver.session();
    return session
      .run(`
        MATCH (c:Company) where id(c) = ${companyId}
        MERGE (l:Location {name: $locationName})
        CREATE UNIQUE (c)-[r:HAS_LOCATION]->(l)
        RETURN l
      `, {locationName})
      .then(result => {
        const { records } = result;
        return extractNodes(records)[0];
      })
  }


  createContractor(emplObj) {
    // TODO: update this method to match new schema
    const session = this.driver.session();

    const sub = emplObj.sub

    const setProperties = createSetChain(emplObj);

    return session
      .run(`
        MERGE (n:Contractor { sub: "${sub}"})
        ${setProperties}
        RETURN n
      `)
      .then(result => {
        const { records } = result;
        return extractNodes(records)[0];
      })
  }

  deleteNode(identity) {
    const session = this.driver.session();

    return session
      .run(`
        MATCH (n) WHERE ID(n) = ${identity}
        DETACH DELETE n
      `)
      .then(result => {
        session.close()
        return result
      })
  }

  updateContractor(emplObj) {
    const properties = JSON.parse(emplObj.properties)
    const updatedProperties = Object.keys(properties).map(property => {
      const value = properties[property]
      return `SET n.${property} = "${value}" `
    })

    const session = this.driver.session();
    return session
      .run(`
        MATCH (n:Contractor) WHERE id(n) = ${emplObj.identity}
        ${updatedProperties.join('')}
        return n
      `)
      .then(result => {
        const { records } = result;
        return extractNodes(records)[0]
      })
  }

  getContractorByEmail(querySpecs) {
    const session = this.driver.session();
    return session
      .run(`
        MATCH (e:Contractor ${stringifyObject(querySpecs)})
        RETURN e
      `
      /*`MATCH (e:Contractor) WHERE ID(e) = 33 RETURN e`*/
      )
      .then(({records}) => {
        session.close()
        if (_.isEmpty(records[0])) {
          return null
        } else {
          return extractNodes(records)[0]
        }
      });
  }

  getParentNodeList(queryString, label) {
    const session = this.driver.session();
    return session
      .run(`
        MATCH (s:${label})
        WHERE s.name =~ '(?i)${queryString}.*'
        RETURN s
      `)
      .then(({ records }) => extractNodes(records))
      .then(nodes => nodes.map(node => node.properties.name))
  }

  getContractorSkills(identity) {
    const session = this.driver.session();
    return session
      .run(`
        MATCH (c:Contractor) WHERE ID(c) = ${identity}
        MATCH (c)-[:HAS_SKILL_INSTANCE]->(skillInstance)
        RETURN skillInstance
      `)
      .then(({records}) => {
        return extractNodes(records);
      })
      .catch(err => {
        console.error(err);
      })
  }

  addSkillToContractor(identity, skill) {
    const session = this.driver.session();

    return session
      .run(`
        MATCH (c:Contractor) WHERE ID(c) = ${identity}
        MATCH (parentSkill:Skill { name: "${skill.name}" })
        CREATE (skill:SkillInstance ${stringifyObject(skill)})-[:INSTANCE_OF]->(parentSkill),
        (c)-[:HAS_SKILL_INSTANCE]->(skill)
        RETURN skill
      `)
      .then(({ records }) => {
        session.close();
        return extractNodes(records);
      })
      .catch(err => {
        console.error(err)
      })
  }

  getContractorCertifications(identity) {
    //updated - 7/7
    const session = this.driver.session();
    return session
      .run(`
        MATCH (c:Contractor) WHERE ID(c) = ${identity}
        MATCH (c)-[:HAS_CERTIFICATION]->(cert)
        RETURN cert
      `)
      .then(({records}) => {
        session.close();
        return extractNodes(records);
      })
      .catch(err => {
        console.error(err);
      })
  }

  addContractorCertification(identity, certification) {
    // TODO: update this method to match new schema
    const session = this.driver.session();
    return session
      .run(`
        MATCH (c:Contractor) WHERE ID(c) = ${identity}
        MATCH (parentCert:Certification { name: "${certification.name}" })
        CREATE (cert:CertificationInstance ${stringifyObject(certification)})-[:INSTANCE_OF]->(parentCert),
        (c)-[:HAS_CERTIFICATION_INSTANCE]->(cert)
        RETURN cert
      `)
      .then((result) => {
        const { records } = result;
        session.close();
        return extractNodes(records);
      })
      .catch(err => {
        console.error(err)
      })
  }

  addContractorExperience(identity, experience) {
    // TODO: update this method to match new schema
    const session = this.driver.session();
    return session
      .run(`
        MATCH (cont:Contractor) WHERE ID(cont) = ${identity}
        MATCH (local:Location { name: "${experience.location}"}),
        (company:Company { name: "${experience.company}"})
        WHERE (company)-[:HAS_LOCATION]->(local)
        CREATE (cont)-[:HAS_EXPERIENCE]->(e:Experience ${stringifyObject(experience)}),
        (e)-[:AT]->(local)
        RETURN e
      `)
      .then(result => {
        const { records } = result;
        session.close();
        return extractNodes(records);
      })
      .catch(err => console.error(err))
  }

  getTeam(reqQuery) {
    // updated 7/7
    const { teamId } = reqQuery;
    const session = this.driver.session();
    return session
      .run(`
        MATCH (t:Team) WHERE id(t) = ${teamId}
        OPTIONAL MATCH (proj:Project)-[]-(t)
        OPTIONAL MATCH (l:Location)-[]-(proj)
        OPTIONAL MATCH (r:Role)-[]-(t)
        OPTIONAL MATCH (pos:Position)-[]-(r)
        RETURN t,l,proj,pos
      `)
      .then(result => {
        const { records } = result;
        session.close();
        return newExtractNodes(records);
      })
      .catch(err => console.error(err));
  }

  getTeams() {
    // updated 7/7
    const session = this.driver.session();
    return session
      .run(`
        MATCH (t:Team)
        RETURN t
      `)
      .then(result => {
        const { records } = result;
        session.close();
        return newExtractNodes(records);
      })
      .catch(err => console.error(err));
  }

  createTeam(reqBody) {
    // TODO: update this method to match new schema

    const { teamName, projectId, startDate, endDate } = reqBody;

    const session = this.driver.session();
    return session
      .run(`
        MATCH (project:Project) where id(project) = ${projectId}
        CREATE (team:Team {
          name: $teamName,
          startDate: $startDate,
          endDate: $endDate,
          created_at: '${new Date()}'
        })-[:TEAM_FOR]->(project)
        RETURN team
      `, {teamName, startDate, endDate})
      .then(result => {
        const { records } = result;
        session.close();
        return records.length
          ? extractNodes(records)
          : {"error": "An error occurred. This team was not created."};
      })
      .catch(err => {
        console.error(err)
      });
  }

  createProject(reqBody) {
    // TODO: update this method to match new schema
    const { projectName, locationId } = reqBody;

    const session = this.driver.session();
    return session
      .run(`
        MATCH (location:Location) where id(location) = ${locationId}
        CREATE (project:Project {name: $projectName, created_at: '${new Date()}'})-[:PROJECT_AT]->(location)
        RETURN project
      `, {projectName})
      .then(result => {
        const { records } = result;
        session.close();
        return records.length
          ? extractNodes(records)
          : {"error": "An error occurred. This team was not created."};
      })
      .catch(err => {
        console.error(err)
      });
  }

  getProject(reqQuery) {
    // TODO: update this method to match new schema
    const { projectId } = reqQuery;
    const session = this.driver.session();
    return session
      .run(`
        MATCH (p:Project) WHERE ID(p) = ${projectId}
        RETURN p
      `)
      .then(result => {
        const { records } = result;
        session.close();
        return extractNodes(records);
      })
      .catch(err => console.error(err));
  }

  getProjects() {
    // TODO: update this method to match new schema
    const session = this.driver.session();
    return session
      .run(`
        MATCH (p:Project)
        RETURN p
      `)
      .then(result => {
        const { records } = result;
        session.close();
        return extractNodes(records);
      })
      .catch(err => console.error(err));
  }



  updateNode(id, properties) {
    const session = this.driver.session();
    const updatedProperties = createSetChain(properties)
    return session
      .run(`
        MATCH (n) WHERE id(n) = ${id}
        ${updatedProperties}
        RETURN n
      `)
      .then(result => {
        session.close();
        return this.getNodeById(id)
      })
      .then(result => {
        return result
      })
  }

  getTeamRoles(teamId) {
    const session = this.driver.session();
    return session
      .run(`
        MATCH (t:Team) WHERE ID(t) = ${teamId}
        MATCH (t)-[:REQUIRES_ROLE]->(r)
        RETURN r
      `)
      .then(({ records }) => {
        session.close()
        return extractNodes(records)
      })
  }

  createTeamRole(teamId, role) {
    const {
      positionLevelId,
      requiredNumber,
      description,
      position,
      positionLevel
    } = _.mapValues(role, (value) => !isNaN(value)? parseInt(value) : value);

    const session = this.driver.session();
    return session
      .run(`
        MATCH (t:Team) WHERE ID(t) = $teamId
        MATCH (pl:PositionLevel) WHERE ID(pl) = $positionLevelId
        CREATE (t)-[:REQUIRES_ROLE]->(r:Role {
          requiredNumber: $requiredNumber,
          description: $description,
          position: $position,
          positionLevel: $positionLevel
        })-[:ROLE_AT]->(pl)
        RETURN r
      `, { teamId, positionLevelId, requiredNumber, description, position, positionLevel })
      .then( ({ records }) => {
        session.close()
        return extractNodes(records)
      });
  }

  getPositionLevels() {
    const session = this.driver.session();
    return session
      .run(`MATCH (pl:PositionLevel) RETURN pl`)
      .then( ({records}) => {
        session.close();
        return extractNodes(records);
      });
  }

}

module.exports = GraphApi;
