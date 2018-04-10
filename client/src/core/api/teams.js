import api from './config';

export function getAllTeams() {
  return api.get('/team');
}

export function addTeam(newTeam) {
  return api.post('/team', newTeam);
}

export function getTeamById(id) {
  return api.get(`/team?teamId=${id}`)
}