import {
  GET_CERTIFICATIONS_FULFILLED,
} from '../../utils/types';

export function certificationsReducer(state = {
  list: [],
}, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CERTIFICATIONS_FULFILLED:
      return {...state, list: payload };
    default:
      return state;
  }
}
