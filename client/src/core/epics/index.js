import { combineEpics } from 'redux-observable';

/*
  import epics and reducers here,
  they should be kept in the same file
  i.e. => import blahReducer, { blahEpic } from './blah'
*/
import { getUserEpic, addUserEpic, updateUserEpic } from './user';
import {
  getSkillsEpic,
  addSkillEpic,
  deleteSkillEpic,
} from './skills';

import {
  getCertificationsEpic,
  addCertificationEpic,
  deleteCertificationEpic,
  editCertificationEpic,
} from './certifications';

import {
  getExperiencesEpic,
  addExperienceEpic,
  deleteExperienceEpic,
}  from './experiences';

import {
  addTeamEpic,
  getTeamEpic,
  getAllTeamsEpic,
}  from './team';

import {
  getTeamRolesEpic,
  deleteRoleEpic
} from './teamRoles';

import {
  getProjectEpic,
  getAllProjectsEpic,
}  from './project';

export const rootEpic = combineEpics(
  /* epics */
  getUserEpic,
  getSkillsEpic,
  addSkillEpic,
  addUserEpic,
  updateUserEpic,
  getCertificationsEpic,
  addCertificationEpic,
  deleteCertificationEpic,
  editCertificationEpic,
  getExperiencesEpic,
  addExperienceEpic,
  deleteExperienceEpic,
  deleteSkillEpic,
  addTeamEpic,
  getTeamEpic,
  getAllTeamsEpic,
  getProjectEpic,
  getAllProjectsEpic,
  ////////////////////
  getTeamRolesEpic,
);

