const authEpic = action$ => {
  return action$.ofType('LOGIN_REQUEST')
    .delay(1000)
    .mapTo({ type: 'EXAMPLE_FULLFILLED'})
}

const initialState = {
  isAuthenticated: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      console.log(state);
      return Object.assign({}, ...state, {
        isAuthenticated: true
      });
    case 'AUTH_FAIL':
      console.log(state);
      return Object.assign({}, ...state, {
        isAuthenticated: false
      });
    default:
      return { ...state };
  }
}

export {
  authReducer as default,
  authEpic
}



const authSuccess = () => ({
    type: 'AUTH_SUCCESS'
})

const authFail = () => ({
    type: 'AUTH_FAIL'
})
