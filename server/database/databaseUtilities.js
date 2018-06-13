const _ = require('lodash');
const neo4j = require('neo4j-driver').v1;

function extractNodes(queryResult) {

  return _.reduce(queryResult, (acc, value) => {
    const fields = value._fields;
    const nodes =  _.map(fields, ({ properties, labels, identity }) => {
      return {
        properties,
        labels,
        identity: identity.toString()
      }
    });
    return acc.concat(nodes);
  }, []);
}

function extractRows(queryResult) {
  return _.reduce(queryResult, (acc, value) => {
    const fields = value._fields;
    return [...acc, fields];
  }, []);
}

function extractNodesWithRelatedNodes(queryResult) {
  const rows = extractRows(queryResult);
  const resultsArray = [];
  rows.forEach(row => {
    var index = getIndexOfNode(resultsArray, row[0]);
    if (index === false) {
      let newIndex = resultsArray.length;
      resultsArray[newIndex] = row[0];
      resultsArray[newIndex].relatedNodes = [row[1]];
    } else {
      resultsArray[index].relatedNodes.push(row[1]);
    }
  });
  return resultsArray;
}

function getIndexOfNode (resultsArray, targetNode) {
  return resultsArray.reduce((acc, cur, index) => {
    if (cur.identity.low === targetNode.identity.low) {
      return acc ? acc : index;
    } else {
      return acc;
    }
  }, false)
}

function createHasNecessaryProps(propMap) {
  return function(obj) {
    return _.every(propMap, value => _.has(obj, value));
  }
}

const contractorPropMap = [
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

const skillInstancePropMap = [
  'name',
  'date'
]

const mapTypeToQuery = value => {

  if (typeof(value) === 'string') {

    return `"${value}"`

  } else {

    return value
  }
}

const createSetChain = properties =>
  _.reduce(properties, (acc, value, key) => {
    return acc + `SET n.${key} = ${mapTypeToQuery(value)} `
  }, '')


module.exports = {
  contractorHasNecessaryProps: createHasNecessaryProps(contractorPropMap),
  skillHasNecessaryProps: createHasNecessaryProps(skillInstancePropMap),
  extractNodes,
  extractRows,
  extractNodesWithRelatedNodes,
  mapTypeToQuery,
  createSetChain,
}
