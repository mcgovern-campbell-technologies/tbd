import api from './config';

export function getAllProjects() {
  return api.get('/project');
}

export function getProjectById(id) {
  return api.get(`/project?projectId=${id}`)
}