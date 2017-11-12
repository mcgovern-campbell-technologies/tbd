import AuthService from '../../utils/AuthService'
import * as types from '../../utils/types';

const authService = new AuthService();

// const authEpic = (action$, store) => {
//   console.log('store from authEpic')
//   console.log(store);
//   return action$
//     .ofType('LOGIN_START')
//     .mergeMap(action => {
//       authService.login(); // <-- Essentially just redirects to auth0, which will eventually come back to Callback component
//       // action.type = 'LOGIN_REQUEST'  // ?
//          // don't know where to go from here
//     })
// }

const authReducer = (state = {
  isAuthenticated: authService.isAuthenticated(),
  isFetching: false,
  profile: authService.getProfile(),
  error: null,
}, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        profile: action.profile,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        profile: {},
        error: action.error,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        profile: {},
      };
    default:
      return state;
  }
}

export {
  authReducer as default,
  // authEpic
}
