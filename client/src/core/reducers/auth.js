import AuthService from '../utils/AuthService'
import * as types from '../utils/types';

const authService = new AuthService();

export function authReducer(state = {
  isAuthenticated: authService.isAuthenticated(),
  isFetching: false,
  profile: authService.getProfile(),
  error: null,
}, action) {
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
        isFetching: false,
        isAuthenticated: false,
        profile: {},
      };
    default:
      return state;
  }
}
