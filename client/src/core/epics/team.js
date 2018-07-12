import { getTeamFulfilled, getAllTeamsFulfilled } from '../actions/actionCreators';
import * as api from '../api/index';
import {
  ADD_TEAM,
  GET_TEAM,
  GET_ALL_TEAMS,
  GET_TEAM_FULFILLED,
} from '../utils/types';
import { closeDialog } from '../actions/dialog';

const addTeamEpic = (action$, store) => {
  return action$
    .ofType(ADD_TEAM)
    .switchMap(action => api.addTeam(store.getState().form.team.values))
    .map(({response}) => {
      return getTeamFulfilled(response)
    })
    .map(closeDialog);
};

const getAllTeamsEpic = (action$) => {
  return action$
    .ofType(GET_ALL_TEAMS)
    .switchMap(action => api.getAllTeams())
    .map((response) => getAllTeamsFulfilled(response))
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
