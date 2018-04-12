import api from './config';

export function getTeamRoles(teamId) {
  return api.get(`/team/role?teamId=${teamId}`)
}

export function addRoleToTeam(teamId, newRole) {
  return api.post(`/team/role?teamId=${teamId}`, newRole)
}

export function updateRole(roleId, newProperties) {
  return api.put(`/team/role?roleId=${roleId}`, newProperties)
}

export function deleteRole(roleId) {
  return api.remove(`/team/role?roleId=${roleId}`)
}