const exampleEpic = action$ => {
  return action$.ofType('EXAMPLE')
    .delay(1000)
    .mapTo({ type: 'EXAMPLE_FULLFILLED'})
}

const exampleReducer = (state = { example: false }, action) => {

  switch (action.type) {
    case 'EXAMPLE':
      return { example: true }
    case 'EXAMPLE_FULLFILLED':
      return { example: false }
    default:
      return state
  }
}

export {
  exampleReducer as default,
  exampleEpic
}
