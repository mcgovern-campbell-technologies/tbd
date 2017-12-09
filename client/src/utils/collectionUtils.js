import _ from 'lodash'

function arrayToObject(collection) {
  return _.reduce(collection, (acc, value) => {
    acc[value] = true;
    return acc;
  }, {})
}

export function removeCollectionValues(collection, valuesToRemove) {
  const valuesToRemoveMap = arrayToObject(valuesToRemove);
  return _.filter(collection, value => !arrayToObject[value]);
}

export default {
  removeCollectionValues
}