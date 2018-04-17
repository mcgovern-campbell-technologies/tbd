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

export const rootReducer = combineReducers({
  auth: authReducer,
  onBoarding: onBoardingReducer,
  user: userReducer,
  router: routerReducer,
  form: formReducer,
  skills: skillsReducer,
  certifications: certificationsReducer,
  experiences: experiencesReducer,
  projects: projectsReducer,
  teams: teamsReducer,
});