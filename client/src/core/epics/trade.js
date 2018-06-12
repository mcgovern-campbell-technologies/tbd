import { getTradesSuccess } from '../actions/trade';
import * as api from '../api/index';
import {
  GET_TRADES,
} from '../../utils/types';

const getTradeEpic = (action$) => {
  return action$
    .ofType(GET_TRADES)
    .switchMap(() => api.getTrades())
    .map(response => getTradesSuccess(response))
};

export {
  getTradeEpic,
}
