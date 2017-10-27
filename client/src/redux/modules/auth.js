import AuthService from '../../utils/AuthService'
import * as types from '../../utils/types';

const authService = new AuthService();

// const authEpic = action$ => {
// }

const authReducer = (state = {
  // isAuthenticated: !AuthService.isTokenExpired(),
  isFetching: false,
  profile: authService.getProfile(),
  error: null,
}, action) => {
  console.log('action')
  console.log(action)
  switch (action.type) {
    case types.LOGIN_REQUEST:
      console.log('firing LOGIN_REQUEST from auth.js module')
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case types.LOGIN_SUCCESS:
      console.log('firing LOGIN_SUCCESS from auth.js module')
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        profile: action.profile,
      };
    case types.LOGIN_ERROR:
      console.log('firing LOGIN_ERROR from auth.js module')
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        profile: {},
        error: action.error,
      };
    case types.LOGOUT_SUCCESS:
    console.log('firing LOGOUT_SUCCESS from auth.js module')
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
