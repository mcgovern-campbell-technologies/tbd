import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import { authReducer } from './auth';
import { onBoardingReducer } from './onBoarding';
import { userReducer } from './users';
import { skillsReducer } from './skills';
import { certificationsReducer } from './certifications';
import { experiencesReducer } from './experiences';
import { projectsReducer } from './projects';
import { teamsReducer } from './teams';
import { teamReducer } from './team';
import { dialogReducer } from './dialog';
import { optionsReducer } from './options';
import { uiReducer } from './ui';

export const rootReducer = combineReducers({
  auth: authReducer,
  dialog: dialogReducer,
  onBoarding: onBoardingReducer,
  user: userReducer,
  router: routerReducer,
  form: formReducer,
  skills: skillsReducer,
  certifications: certificationsReducer,
  experiences: experiencesReducer,
  projects: projectsReducer,
  teams: teamsReducer,
  team: teamReducer,
  options: optionsReducer,
  ui: uiReducer,
});