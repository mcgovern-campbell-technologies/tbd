import _ from 'lodash'

function checkProperties() {
  const requiredProperties = [ 'project', 'location','startDate', 'endDate' ];

  return _.every(requiredProperties, value => {
    return this.state.hasOwnProperty(value) && this.state[value].length > 0
  })

}

function validateProperties(validationObject, state) {
  /*
    the validation looks like so: 
    {targetParameter: function signaturePredicate(value, validationObject) {...}}
  */
  return _.every(validationObject, (predicate, key) => {
    if (state[key]) {
      return predicate(state[key], state) 
    } else {
      return false
    }
  })

}

export {
  checkProperties,
  validateProperties,
}