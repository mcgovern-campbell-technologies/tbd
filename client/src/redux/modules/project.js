import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs'
import { getProjectFulfilled } from './../actions/actionCreators';
import {
  GET_PROJECT,
  GET_ALL_PROJECTS,
  GET_PROJECT_FULFILLED,
} from '../../utils/types';

const DOMAIN = window.location.host || 'localhost'

const getProjectEpic = (action$, state) => {
  return action$
    .ofType(GET_PROJECT)
    .mergeMap(
      action => {
        return ajax.getJSON(`http://${DOMAIN}:4000/api/project?projectId=${action.payload}`)
          .map(response => {
            return getProjectFulfilled(response);
          })
      }
    )
    .concat(action$.mapTo({ type: GET_PROJECT_FULFILLED }))
}

const getAllProjectsEpic = (action$, state) => {
  return action$
    .ofType(GET_ALL_PROJECTS)
    .mergeMap(
      action => {
        return ajax.getJSON(`http://${DOMAIN}:4000/api/project`)
          .map(response => {
            return getProjectFulfilled(response);
          })
      }
    )
    .concat(action$.mapTo({ type: GET_PROJECT_FULFILLED }))
}

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
