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

export function deleteSkill(identity) {
  return {
    type: types.DELETE_SKILL,
    payload: identity,
  }
}

export function getCertifications() {
  return {
    type: types.GET_CERTIFICATIONS,
  }
}

export function getCertificationsFulfilled(certifications) {
  return {
    type: types.GET_CERTIFICATIONS_FULFILLED,
    payload: certifications
  }
}

export function addCertification(certification) {
  return {
    type: types.ADD_CERTIFICATION,
    payload: certification
  }
}

export function editCertification(modifiedCert) {
  return {
    type: types.EDIT_CERTIFICATION,
    payload: modifiedCert
  }
}

export function deleteCertification(id) {
  return {
    type: types.DELETE_CERTIFICATION,
    payload: id
  }
}

export function getExperiences() {
  return {
    type: types.GET_EXPERIENCES
  }
}

export function getExperiencesFullfilled(payload) {
  return {
    type: types.GET_EXPERIENCES_FULLFILLED,
    payload
  }
}

export function addExperience(exp) {
  return {
    type: types.ADD_EXPERIENCE,
    payload: exp
  }
}

export function editExperience(modifiedExperience) {
  return {
    type: types.EDIT_EXPERIENCE,
    payload: modifiedExperience
  }
}

export function deleteExperience(id) {
  return {
    type: types.DELETE_EXPERIENCE,
    payload: id
  }
}

export function addTeam(team) {
  return {
    type: types.ADD_TEAM,
    payload: team
  }
}

export function getTeam(id) {
  return {
    type: types.GET_TEAM,
    payload: id
  }
}

export function getTeamFulfilled(payload) {
  return {
    type: types.GET_TEAM_FULFILLED,
    payload: payload
  }
}

export function getAllTeams() {
  return {
    type: types.GET_ALL_TEAMS,
    payload: null
  }
}

export function getAllTeamsFulfilled(payload) {
  return {
    type: types.GET_ALL_TEAMS_FULFILLED,
    payload: payload
  }
}


export function getProject(id) {
  return {
    type: types.GET_PROJECT,
    payload: id
  }
}

export function getAllProjects() {
  return {
    type: types.GET_ALL_PROJECTS,
    payload: null
  }
}

export function getProjectFulfilled(payload) {
  return {
    type: types.GET_PROJECT_FULFILLED,
    payload: payload
  }
}

export function getTeamRoles(teamId) {
  return {
    type: types.GET_TEAM_ROLES,
    teamId
  }

}

export function getTeamRolesFulfilled(teamId, roles) {
  return {
    type: types.GET_TEAM_ROLES_FULFILLED,
    payload: roles,
    teamId
  }
}

export function addRoleToTeam(teamId, role) {
  return {
    type: types.ADD_ROLE_TO_TEAM,
    payload: role,
    teamId
  }
}

export function updateRole(roleId, updateProperties) {
  type: types.UPDATE_ROLE,
  updateProperties,
  roleId
}

export function deleteRole(roleId) {
  type: types.DELETE_ROLE,
  roleId
}




