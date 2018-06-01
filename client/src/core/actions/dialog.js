import * as types from '../../utils/types';

export function openDialog(payload) {
  return {
    type: types.OPEN_DIALOG,
    payload: { type: payload },
  }
}

export function closeDialog() {
  return {
    type: types.CLOSE_DIALOG,
  }
}