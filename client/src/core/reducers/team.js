import {
  GET_TEAM_FULFILLED,
  GET_TEAM_ROLES_FULFILLED,
} from '../utils/types';

const initialState = {
  id: null,
  name: '',
  endDate: '',
  startDate: '',
  location: {},
  project: {},
  roles: [],
  positions: [],
  contractors: [],
}

export function teamReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TEAM_FULFILLED:
      return payload.team || initialState;
    case GET_TEAM_ROLES_FULFILLED:
      return {
        ...state,
        roles: payload.roles,
      };
    default:
      return state;
  }
}
