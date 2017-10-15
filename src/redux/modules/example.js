const exampleEpic = action$ => {
  console.log('action$ from exampleEpic')
  console.log(action$)
  return action$.ofType('EXAMPLE')
    .delay(1000)
    .mapTo({ type: 'EXAMPLE_FULLFILLED'})
}

const exampleReducer = (state = { example: false }, action) => {

  switch (action.type) {
    case 'EXAMPLE':
      console.log(state);
      return { example: true }
    case 'EXAMPLE_FULLFILLED':
      console.log(state);
      return { example: false }
    default:
      console.log(state);
      return state
  }
}

export {
  exampleReducer as default,
  exampleEpic
}
