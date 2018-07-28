import {
  SELECT_ROLE
} from '../utils/types';

export function uiReducer(state = {
  selectedRoleId: null,
}, action) {
  const { type, payload } = action;
  switch (type) {
    case SELECT_ROLE:
      return {
        ...state,
        selectedRoleId: payload.id,
      };
    default:
      return state;
  }
}