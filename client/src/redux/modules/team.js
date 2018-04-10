import { getTeamFulfilled, getAllTeamsFulfilled } from './../actions/actionCreators';
import * as api from '../../core/api';
import {
  ADD_TEAM,
  GET_TEAM,
  GET_ALL_TEAMS,
  GET_ALL_TEAMS_FULFILLED,
  GET_TEAM_FULFILLED,
} from '../../utils/types';

const addTeamEpic = (action$) => {
  return action$
    .ofType(ADD_TEAM)
    .mergeMap(
      action => {
        return api.addTeam(action.payload)
          .map(({response}) => {
            return getTeamFulfilled(response)
          })
      }
    )
}

const getAllTeamsEpic = (action$) => {
  return action$
    .ofType(GET_ALL_TEAMS)
    .mergeMap(
      action => {
        return api.getAllTeams()
          .map(response => {
            return getAllTeamsFulfilled(response);
          })
      }
    )
    .concat(action$.mapTo({ type: GET_ALL_TEAMS_FULFILLED }))
}

const getTeamEpic = (action$) => {
  return action$
    .ofType(GET_TEAM)
    .mergeMap(
      action => {
        return api.getTeamById(action.payload)
          .map(response => {
            return getTeamFulfilled(response);
          })
      }
    )
    .concat(action$.mapTo({ type: GET_TEAM_FULFILLED }))
}

const teams = (state = {
  allTeams: [],
  team: {},
  location: {},
  project: {},
}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_TEAMS_FULFILLED:
      return { ...state, allTeams: payload || [] };
    case GET_TEAM_FULFILLED:
      return {
        ...state,
        team: payload[0] || {},
        location: payload[1] || {},
        project: payload[2] || {},
      }
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
