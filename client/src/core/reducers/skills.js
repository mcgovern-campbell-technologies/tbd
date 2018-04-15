import {
  GET_SKILLS_FULLFILLED,
  SKILLS_WERE_CHECKED,
} from '../../utils/types';

export function skillsReducer(state = {
  list: [],
  checked: false
}, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_SKILLS_FULLFILLED:
      return Object.assign({}, state, { list: payload || [] });
    case SKILLS_WERE_CHECKED:
      return Object.assign({}, state, { checked: true });
    default:
      return state;
  }
};