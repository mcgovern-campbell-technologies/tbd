import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { reducer as formReducer } from 'redux-form';
/*
  import epics and reducers here,
  they should be kept in the same file
  i.e. => import blahReducer, { blahEpic } from './blah'
*/
import authReducer, { authEpic } from './auth';
import onBoardingReducer, { onBoardingEpic } from './onBoarding';
import userReducer, { getUserEpic, addUserEpic, updateUserEpic } from './user';
import skills, {
  getSkillsEpic,
  addSkillEpic,
  deleteSkillEpic,
} from './skills';

import certifications, {
  getCertificationsEpic,
  addCertificationEpic,
  deleteCertificationEpic,
  editCertificationEpic,
} from './certifications';

import experiences, {
  getExperiencesEpic,
  addExperienceEpic,
  deleteExperienceEpic,
}  from './experiences';

import teams, {
  addTeamEpic,
  getTeamEpic,
  getAllTeamsEpic,
}  from './team';

import projects, {
  getProjectEpic,
  getAllProjectsEpic,
}  from './project';

export const rootEpic = combineEpics(
  /* epics */
  // authEpic,
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
);

export const rootReducer = combineReducers({
  /* reducers */
  auth: authReducer,
  onBoardingReducer,
  user: userReducer,
  router: routerReducer,
  form: formReducer,
  skills,
  certifications,
  experiences,
  projects,
  teams,
})
