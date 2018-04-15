import {
  GET_PROJECT_FULFILLED,
} from '../../utils/types';

export function projectsReducer(state = {
  allProjects: [],
}, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROJECT_FULFILLED:
      return {...state, allProjects: payload || []};
    default:
      return state;
  }
}