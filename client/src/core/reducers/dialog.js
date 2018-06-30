import {
  OPEN_DIALOG,
  CLOSE_DIALOG,
} from '../utils/types';

const initialState = {
  type: null,
  props: {},
}

export function dialogReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case OPEN_DIALOG:
      return {
        ...state,
        type: payload.type,
      };
    case CLOSE_DIALOG:
      return initialState;
    default:
      return state;
  }
}
