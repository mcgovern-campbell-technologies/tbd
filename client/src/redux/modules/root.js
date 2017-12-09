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
import userReducer, { getUserEpic, addUserEpic } from './user';
import skills, { getSkillsEpic, addSkillEpic } from './skills'

export const rootEpic = combineEpics(
  /* epics */
  // authEpic,
  getUserEpic,
  getSkillsEpic,
  addSkillEpic,
  addUserEpic,
);

export const rootReducer = combineReducers({
  /* reducers */
  auth: authReducer,
  onBoardingReducer,
  user: userReducer,
  router: routerReducer,
  form: formReducer,
  skills,
})
