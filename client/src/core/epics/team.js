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
    .switchMap(action => api.getTeamById(action.payload))
    .map(response => getTeamFulfilled({
      id: response.id,
      name: response.name || '',
      endDate: response.endDate || '',
      startDate: response.startDate || '',
      location: response.Locations[0] || {},
      project: response.Projects[0] || {},
      roles: response.Roles || [],
      positions: response.Positions || [],
      contractors: response.Contractors || [],
    }))
};

export {
  addTeamEpic,
  getTeamEpic,
  getAllTeamsEpic,
}
