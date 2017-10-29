const _ = require('lodash');

function extractNodes(queryResult) {
  return _.reduce(queryResult, (acc, value) => {
    const fields = value._fields;
    const nodes =  _.map(fields, ({ properties, labels, identity }) => {
      return {
        properties,
        labels,
        _identity: identity
      }
    });
    return acc.concat(nodes);
  }, []);
}

function createHasNecessaryProps(propMap) {
  return function(obj) {
    return _.every(propMap, value => _.has(obj, value));
  }
}

const employeePropMap = [
  'clientID',
  'created_at',
  'email',
  'email_verified',
  'family_name',
  'gender',
  'given_name',
  'global_client_id',
  'identities',
  'locale',
  'name',
  'nickname',
  'picture',
  'updated_at',
  'user_id',
];


module.exports = {
  employeeHasNecessaryProps: createHasNecessaryProps(employeePropMap),
  extractNodes,
}


