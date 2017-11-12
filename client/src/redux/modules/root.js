import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { reducer as formReducer } from 'redux-form';
/*
  import epics and reducers here,
  they should be kept in the same file
  i.e. => import blahReducer, { blahEpic } from './blah'
*/
import exampleReducer, { exampleEpic } from './example';
import authReducer, { authEpic } from './auth';
import onBoardingReducer, { onBoardingEpic } from './onBoarding';
import userReducer, { getUserEpic } from './user';

export const rootEpic = combineEpics(
  /* epics */
  exampleEpic,
  // authEpic,
  getUserEpic,
);

export const rootReducer = combineReducers({
  /* reducers */
  exampleReducer,
  auth: authReducer,
  onBoardingReducer,
  user: userReducer,
  one: (state = {}) => state,
  two: (state = {}) => state,
  router: routerReducer,
  form: formReducer
})
