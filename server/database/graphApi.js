const neo4j = require('neo4j-driver').v1;
const _ = require('lodash')

const { databaseCredentials } = require('./../../secrets.js');
const { username, password } = databaseCredentials

class GraphApi {

  constructor(username, password, connection = "bolt://localhost") {
    this.driver = neo4j.driver(connection, neo4j.auth.basic(username, password));
  }

  closeDriver() {
    this.driver.close();
  }

  getEmployee(email, callback) {
    const session = this.driver.session();

    return session
      .run(`
        MATCH (e:Employee)
        WHERE e.email = ${email}
        RETURN e
      `)
      .then(result => {
        session.close()

        if (_.isEmpty(result.records)) {
          return null
        } else {
          return result.records
        }

      })
  }
}

new GraphApi(username, password)

