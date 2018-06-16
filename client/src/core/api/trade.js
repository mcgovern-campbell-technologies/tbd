import api from './config';

export function getTrades() {
  return api.get('/trade');
}
