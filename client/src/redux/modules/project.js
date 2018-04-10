import { getProjectFulfilled } from './../actions/actionCreators';
import * as api from '../../core/api';
import {
  GET_PROJECT,
  GET_ALL_PROJECTS,
  GET_PROJECT_FULFILLED,
} from '../../utils/types';

const getProjectEpic = (action$) => {
  return action$
    .ofType(GET_PROJECT)
    .mergeMap(
      action => {
        return api.getProjectById(action.payload)
          .map(response => {
            return getProjectFulfilled(response);
          })
      }
    )
    .concat(action$.mapTo({ type: GET_PROJECT_FULFILLED }))
};

const getAllProjectsEpic = (action$) => {
  return action$
    .ofType(GET_ALL_PROJECTS)
    .mergeMap(
      action => {
        return api.getAllProjects()
          .map(response => {
            return getProjectFulfilled(response);
          })
      }
    )
    .concat(action$.mapTo({ type: GET_PROJECT_FULFILLED }))
};

const projects = (state = {
  allProjects: [],
}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PROJECT_FULFILLED:
      return {...state, allProjects: payload || []};
    default:
      return state;
  }
}

export {
  projects as default,
  getProjectEpic,
  getAllProjectsEpic,
}
