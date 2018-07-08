const _ = require('lodash');
const neo4j = require('neo4j-driver').v1;

function extractNodes(queryResult) {
  return _.reduce(queryResult, (acc, value) => {
    const fields = value._fields;
    const nodes =  _.map(fields, ({ properties, labels, identity }) => {
      return {
        ...properties,
        // labels,
        identity: identity.toString()
      }
    });
    return acc.concat(nodes);
  }, []);
}

function buildNodeShape(obj) {
  const newObj = {};
  // newObj.labels = obj.labels;
  newObj.id = obj.identity.low;
  Object.assign(newObj, obj.properties);
  return newObj;
}

function newExtractNodes(queryResult, targetLabel) {
  const response = {};
  let relatedNode;

  _.forEach(queryResult, ele => {
    _.forEach(ele._fields, field => {
      if (field) {
        targetLabel = targetLabel || field.labels[0];
        if (field.labels[0] === targetLabel) {
          Object.assign(response, buildNodeShape(field));
        } else {
          if (!Array.isArray(response[field.labels[0] + "s"])) {
            response[field.labels[0] + "s"] = [];
          }
          relatedNode = buildNodeShape(field);

          if (response[field.labels[0] + "s"].findIndex(ele => ele.id === relatedNode.id) < 0) {
            response[field.labels[0] + "s"].push(relatedNode);
          }
        }
      }
    })
  })

  return response;
}

function extractRows(queryResult) {
  return _.reduce(queryResult, (acc, value) => {
    const fields = value._fields;
    return [...acc, fields];
  }, []);
}

function extractNodesWithRelatedNodes(queryResult, relatedNodePropName) {
  relatedNodePropName = relatedNodePropName || 'relatedNodes';
  const rows = extractRows(queryResult);
  const resultsArray = [];
  rows.forEach(row => {
    let targetIndex = getIndexOfNode(resultsArray, row[0]);
    if (targetIndex === false) {
      let newIndex = resultsArray.length;
      resultsArray[newIndex] = row[0];
      resultsArray[newIndex][relatedNodePropName] = [makeMinimalObject(row[1])];
    } else {
      resultsArray[targetIndex][relatedNodePropName].push(makeMinimalObject(row[1]));
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
  }, false);
}

// just returns an object with node id and label property.
function makeMinimalObject (node) {
  const minimalNode = {};
  minimalNode.id = node.identity.low;
  minimalNode.label = node.properties.label;
  return minimalNode;
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
  newExtractNodes,
  extractRows,
  extractNodesWithRelatedNodes,
  mapTypeToQuery,
  createSetChain,
}
