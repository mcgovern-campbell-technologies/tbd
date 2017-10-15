import AuthService from '../../utils/AuthService'
import * as types from '../../utils/types';

const authEpic = action$ => {
  return action$.ofType('LOGIN_REQUEST')
    .delay(1000)
    .mapTo({ type: 'LOGIN_SUCCESS'})
}

const authReducer = (state = {
  isAuthenticated: !AuthService.isTokenExpired(),
  isFetching: false,
  profile: AuthService.getProfile(),
  error: null,
}, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      var x = new AuthService   //HACK
      x.login()                 //HACK
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
  authEpic
}
