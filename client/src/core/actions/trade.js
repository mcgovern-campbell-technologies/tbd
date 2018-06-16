import * as types from '../../utils/types';

export function getTrades() {
  return {
    type: types.GET_TRADES,
  }
}

export function getTradesSuccess(trades) {
  return {
    type: types.GET_TRADES_SUCCESS,
    payload: { trades },
  }
}
