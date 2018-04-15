import {
  GET_ALL_TEAMS_FULFILLED,
  GET_TEAM_FULFILLED,
} from '../../utils/types';

export function teamsReducer(state = {
  allTeams: [],
  team: {},
  location: {},
  project: {},
}, action) {
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
