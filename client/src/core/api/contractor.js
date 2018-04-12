import api from './config';

export function getUserById(id) {
  return api.get(`/contractor/?sub=${id}`);
}

export function addContractor(newContractor) {
  return api.post(`/contractor`, newContractor);
}

export function updateContractor(contractor) {
  return api.post(`/contractor/update`, contractor);
}

export function getContractorSkills(id) {
  return api.get(`/contractor/skills?identity=${id}`);
}

export function addContractorSkill(id, skill) {
  return api.post(`/contractor/skills?identity=${id}`, skill)
}

export function deleteContractorSkill(id) {
  return api.remove(`/contractor/skills?identity=${id}`)
}

export function getContractorExperiences(id) {
  return api.get(`/contractor/experience?identity=${id}`)
}

export function addContractorExperience(id, experience) {
  return api.post(`/contractor/experience?identity=${id}`, experience)
}

export function deleteContractorExperience(id) {
  return api.remove(`/contractor/experience?identity=${id}`)
}

export function editContractorExperience(id, property) {
  return api.put(`/contractor/experience?identity=${id}`, property)
}

export function getContractorCertifications(id) {
  return api.get(`/contractor/certifications?identity=${id}`)
}

export function addContractorCertification(id, certification) {
  return api.post(`/contractor/certifications?identity=${id}`, certification)
}

export function deleteContractorCertification(id) {
  return api.remove(`/contractor/certifications?identity=${id}`)
}

export function editContractorCertification(id, property) {
  return api.put(`/contractor/certifications?identity=${id}`, property)
}