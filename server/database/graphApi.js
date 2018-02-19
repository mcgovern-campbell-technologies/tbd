const neo4j = require('neo4j-driver').v1;
const _ = require('lodash');
const stringifyObject = require('stringify-object');
const { contractorHasNecessaryProps, extractNodes } = require('./databaseUtilities');
const { startUpScript, massDelete } = require('./startUpCypherScript')

class GraphApi {
  constructor(username, password, connection) {
    this.driver = neo4j.driver(connection, neo4j.auth.basic(username, password));

    console.log('in constructor')
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

  createContractor(emplObj) {
    const session = this.driver.session();
    return session
      .run(`
        CREATE (e:Contractor ${stringifyObject(emplObj)})
        RETURN e
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
        console.log(result)
        return result
      })
  }

  updateContractor(emplObj) {
    const properties = JSON.parse(emplObj.properties)
    const updatedProperties = Object.keys(properties).map(property => {
      const value = properties[property]
      // console.log(`SET n.${property} = "${value}" `)
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
      `)
      .then(({ records }) => {
        session.close()
        if (_.isEmpty(records)) {
          return null
        } else {
          return extractNodes(records)[0]
        }
      });
  }

  getParentNodeList(queryString, label) {
    const session = this.driver.session();
    console.log({ queryString })
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
    console.log('contractor skill')
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
    console.log(certification);
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
        console.log(extractNodes(records))
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

  createTeam(reqBody) {
    const { teamName, projectId } = reqBody;

    const session = this.driver.session();
    return session
      .run(`
        MATCH (project:Project) where id(project) = ${projectId}
        CREATE (team:Team {name: $teamName, created_at: '${new Date()}'})-[:TEAM_FOR]->(project)
        RETURN team
      `, {teamName})
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

  addContractorToTeam(reqBody) {
    const {contractorId, teamId} = reqBody;
    const session = this.driver.session();
    return session
      .run(`
        MATCH (team:Team) where id(team) = ${teamId}
        MATCH (c:Contractor) where id(c) = ${contractorId}
        CREATE UNIQUE (c)-[:IS_MEMBER_OF]->(team)
        RETURN c
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

  removeContractorFromTeam(reqBody) {
    const {contractorId, teamId} = reqBody;
    const session = this.driver.session();
    return session
      .run(`
        MATCH (team:Team) where id(team) = ${teamId}
        MATCH (c:Contractor) where id(c) = ${contractorId}
        MATCH (c)-[r:IS_MEMBER_OF]->(team)
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
}

module.exports = GraphApi;
