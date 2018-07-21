import * as types from '../utils/types';

export function selectRole(id) {
  return {
    type: types.SELECT_ROLE,
    payload: { id }
  }
}