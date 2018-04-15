import { getTeamFulfilled, getAllTeamsFulfilled } from '../actions/actionCreators';
import * as api from '../api/index';
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
};

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
};

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
};

export {
  addTeamEpic,
  getTeamEpic,
  getAllTeamsEpic,
}
