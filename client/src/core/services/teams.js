import api from './api';

export function getAllTeams() {
  api
    .get('/api/team')
    .then(response => response);
}