import {
  GET_EXPERIENCES_FULLFILLED,
} from '../../utils/types';

export function experiencesReducer(state = {
  list: [],
}, action) {
  const { type, payload } = action;
  switch(type) {
    case GET_EXPERIENCES_FULLFILLED:
      return {...state, list: payload };
    default:
      return state
  }
}
