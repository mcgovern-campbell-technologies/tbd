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
    type: types.GET_SKILLS,
    payload: identity
  }
}

export function skillsWereChecked() {
  return {
    type: types.SKILLS_WERE_CHECKED,
  }
}

export function getSkillsFullfilled(skills) {
  return  {
    type: types.GET_SKILLS_FULLFILLED,
    payload: skills
  }
}

export function getUser(profile) {
  if (typeof profile === 'string') {
    profile = JSON.parse(profile)
  }
  return {
    type: types.GET_USER,
    payload: profile.sub
  }
}

export function getUserFulfilled(userObject) {
  return {
    type: types.GET_USER_FULFILLED,
    payload: userObject
  }
}

export function addUser(profile) {
  return {
    type: types.ADD_USER,
    payload: profile
  }
}

export function updateUser(userObj) {
  return {
    type: types.UPDATE_USER,
    payload: userObj
  }
}

export function addSkill(skill, identity) {
  return {
    type: types.ADD_SKILL,
    payload: skill,
    identity
  }
}
