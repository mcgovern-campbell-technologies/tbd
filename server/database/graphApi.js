const neo4j = require('neo4j-driver').v1;
const _ = require('lodash');
const stringifyObject = require('stringify-object');
const { 
  contractorHasNecessaryProps, 
  extractNodes, 
  mapTypeToQuery,
  createSetChain
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
    //   })
  }

  closeDriver() {
    this.driver.close();
  }

  getNodeById(id) {
    const session = this.driver.session();
    return session
      .run(`MATCH (n) where id(n) = ${id} RETURN n`)
      .then(result => {
        const { records } = result;
        return extractNodes(records)[0];
      })
  }

  createLocation(reqBody) {
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

  createPosition(reqBody) {
    const {positionName, teamId} = reqBody;
    const session = this.driver.session();
    return session
      .run(`
        MATCH (p:Position {name: $positionName})
        RETURN p
      `, {positionName})
      .then(result => {
        const { records } = result;
        if (!records.length) {
          return session
            .run(`
              MATCH (t:Team) WHERE id(t) = ${teamId}
              CREATE (p:Position {name: $positionName})
              CREATE (lev1:PositionLevel { value: 2, label: 'one', abreviation: 'I'})
              CREATE (lev2:PositionLevel { value: 3, label: 'two', abreviation: 'II'})
              CREATE (lev3:PositionLevel { value: 1, label: 'specialist', abreviation: 'spec'})
              CREATE UNIQUE (p)-[:HAS_LEVEL]->(lev1)
              CREATE UNIQUE (p)-[:HAS_LEVEL]->(lev2)
              CREATE UNIQUE (p)-[:HAS_LEVEL]->(lev3)
              CREATE UNIQUE (lev1)-[:POSITION_LEVEL_FOR]->(t)
              CREATE UNIQUE (lev2)-[:POSITION_LEVEL_FOR]->(t)
              CREATE UNIQUE (lev3)-[:POSITION_LEVEL_FOR]->(t)
              RETURN p
            `, {positionName})
            .then(result => {
              const { records } = result;
              return extractNodes(records)[0];
            })
        }
        return extractNodes(records)[0];
      })
  }

  createContractor(emplObj) {
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
    const session = this.driver.session();
    return session
      .run(`
        MATCH (c:Contractor) WHERE ID(c) = ${identity}
        MATCH (c)-[:HAS_CERTIFICATION_INSTANCE]->(certInstance)
        RETURN certInstance
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

  getContractorExperience(identity) {
    const session = this.driver.session();
    return session
      .run(`
        MATCH (cont:Contractor) WHERE ID(cont) = ${identity}
        MATCH (cont)-[:HAS_EXPERIENCE]->(exp)
        RETURN exp
      `)
      .then(result => {
        const { records } = result;
        session.close();
        return extractNodes(records);
      })
      .catch(err => console.error(err));
  }

  getTeam(reqQuery) {
    const { teamId } = reqQuery;
    const session = this.driver.session();
    return session
      .run(`
        MATCH (t:Team) WHERE id(t) = ${teamId}
        OPTIONAL MATCH (p:Project)-[]-(t)
        OPTIONAL MATCH (l:Location)-[]-(p)
        RETURN t,l,p
      `)
      .then(result => {
        const { records } = result;
        session.close();
        return extractNodes(records);
      })
      .catch(err => console.error(err));
  }

  getTeams() {
    const session = this.driver.session();
    return session
      .run(`
        MATCH (t:Team)
        RETURN t
      `)
      .then(result => {
        const { records } = result;
        session.close();
        return extractNodes(records);
      })
      .catch(err => console.error(err));
  }

  createTeam(reqBody) {
    const { teamName, projectId, startDate, endDate } = reqBody;

    const session = this.driver.session();
    return session
      .run(`
        MATCH (project:Project) where id(project) = ${projectId}
        CREATE (team:Team {
          name: $teamName,
          startDate: $startDate, endDate: $endDate,
          created_at: '${new Date()}'})-[:TEAM_FOR]->(project)
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

  addExperienceToTeam(reqBody) {
    const {experienceId, teamId} = reqBody;
    const session = this.driver.session();
    return session
      .run(`
        MATCH (team:Team) where id(team) = ${teamId}
        MATCH (exp:Experience) where id(exp) = ${experienceId}
        CREATE UNIQUE (exp)-[:IS_EXPERIENCE_FOR]->(team)
        RETURN team
      `)
      .then(result => {
        const { records } = result;
        session.close();
        return result
      })
      .catch(err => {
        console.error(err)
      });
  }

  removeExperienceFromTeam(reqBody) {
    const {experienceId, teamId} = reqBody;
    const session = this.driver.session();
    return session
      .run(`
        MATCH (team:Team) where id(team) = ${teamId}
        MATCH (exp:Experience) where id(exp) = ${experienceId}
        MATCH (exp)-[r:IS_EXPERIENCE_FOR]->(team)
        delete r
      `)
      .then(result => {
        const { records } = result;
        session.close();
        return result
      })
      .catch(err => {
        console.error(err)
      });
  }

  updateNode(id, properties) {
    const session = this.driver.session();

    // const updatedProperties = Object.keys(properties).map(property => {
    //   const value = properties[property]
    //   // console.log(`SET n.${property} = "${value}" `)
    //   return `SET n.${property} = ${value} `
    // })

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
}

module.exports = GraphApi;
