const neo4j = require('neo4j-driver').v1;
const _ = require('lodash');
const { employeeHasNecessaryProps, extractNodes } = require('./databaseUtilities');

class GraphApi {

  constructor(username, password, connection = "bolt://localhost") {
    this.driver = neo4j.driver(connection, neo4j.auth.basic(username, password));
  }

  closeDriver() {
    this.driver.close();
  }

  getOrCreateEmployee(employee) {
    
    return this.getEmployeeByEmail(employee.email)
      .then(result => {
        if (result === null && employeeHasNecessaryProps(employee)) {
          return createEmployee(employee);
        } else if (result === null) {
          return null;
        } else {
          return extractNodes(result);
        }
      });

  }


  createEmployee(emplObj) {
    
    const session = this.driver.session();
    return session
      .run(`
        CREATE (e:Emplyee ${emplObj})
        RETURN e
      `)
      .then(result => {
        return result
      })
  }

  getEmployeeByEmail(email) {
    const session = this.driver.session();
    console.log('in getEmployee')

    return session
      .run(`
        MATCH (e:Employee { email:"${email}" })
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
}

module.exports = GraphApi;

