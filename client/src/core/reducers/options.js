import {
  GET_TRADES_SUCCESS,
} from '../../utils/types';

export function optionsReducer(state = {
  trades: [],
  positionLevels: [],
}, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TRADES_SUCCESS:
      return {
        ...state,
        trades: payload.trades,
      };
    default:
      return state;
  }
}