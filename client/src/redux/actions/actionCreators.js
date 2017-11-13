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

export function getSkills(identity) {
  return { 
    type: 'GET_SKILLS',
    payload: identity
  }
}

export function getSkillsFullfilled(skills) {
  return  {
    type: 'GET_SKILLS_FULLFILLED',
    payload: skills
  }
}

export function getUser(email) {
  return {
    type: types.GET_USER,
    payload: email
  }
}

export function getUserFulfilled(userObject) {
  return {
    type: types.GET_USER_FULFILLED,
    payload: userObject
  }
}

export function updateUserInformation(update) {
  return {
    type: types.UPDATE_USER_INFORMATION,
    payload: update
  }
}

