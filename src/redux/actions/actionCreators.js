// actions.js
import * as types from '../../utils/types';

export function loginRequest() {
  return {
    type: types.LOGIN_REQUEST,
  };
}

export function loginSuccess(profile) {
  return {
    type: types.LOGIN_SUCCESS,
    profile,
  };
}

export function loginError(error) {
  return {
    type: types.LOGIN_ERROR,
    error,
  };
}

export function logoutSuccess() {
  return {
    type: types.LOGOUT_SUCCESS,
  };
}
