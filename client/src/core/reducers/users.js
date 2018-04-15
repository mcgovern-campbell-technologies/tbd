import * as types from '../../utils/types';

export function userReducer (state = {
  properties: {},
  identity: undefined,
  labels: [],
}, action) {
  const { type, payload } = action;
  switch(type) {
    case types.GET_USER_FULFILLED:
      return payload;
    default:
      return state;
  }
};
