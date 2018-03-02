import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs'
import { getTeamFulfilled } from './../actions/actionCreators';
import {
  ADD_TEAM,
  GET_TEAM,
  GET_ALL_TEAMS,
  GET_TEAM_FULFILLED,
} from '../../utils/types';

const DOMAIN = window.location.host || 'localhost'

const addTeamEpic = (action$, state) => {
  return action$
    .ofType(ADD_TEAM)
    .mergeMap(
      action => {
        return ajax.post(`http://${DOMAIN}:4000/api/team`, action.payload)
          .map(({response}) => {
            return getTeamFulfilled(response)
          })
      }
    )
}

const getAllTeamsEpic = (action$, state) => {
  return action$
    .ofType(GET_ALL_TEAMS)
    .mergeMap(
      action => {
        return ajax.getJSON(`http://${DOMAIN}:4000/api/team`)
          .map(response => {
            return getTeamFulfilled(response);
          })
      }
    )
    .concat(action$.mapTo({ type: GET_TEAM_FULFILLED }))
}

const getTeamEpic = (action$, state) => {
  return action$
    .ofType(GET_TEAM)
    .mergeMap(
      action => {
        return ajax.getJSON(`http://${DOMAIN}:4000/api/team?teamId=${action.payload}`)
          .map(response => {
            return getTeamFulfilled(response);
          })
      }
    )
    .concat(action$.mapTo({ type: GET_TEAM_FULFILLED }))
}

const teams = (state = {
  allTeams: [],
}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TEAM_FULFILLED:
      return {...state, allTeams: payload || []};
    default:
      return state;
  }
}

export {
  teams as default,
  addTeamEpic,
  getTeamEpic,
  getAllTeamsEpic,
}
