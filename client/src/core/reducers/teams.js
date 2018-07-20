import {
  GET_ALL_TEAMS_FULFILLED,
  GET_TEAM_FULFILLED,
} from '../utils/types';

export function teamsReducer(state = {
  allTeams: [],
  team: {},
  location: {},
  project: {},
}, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_TEAMS_FULFILLED:
      return {
        ...state,
        allTeams: payload.teams || []
      };
    default:
      return state;
  }
}
