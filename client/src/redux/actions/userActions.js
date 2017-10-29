import * as types from '../../utils/types';

export function getUser(email) {
  console.log('get user')
  return {
    type: types.GET_USER,
    payload: email
  }
}

export function getUserFulfilled(userObject) {
  return {
    type: types.GET_USER_FULFILLED,
    payload: userObject
  }
}

export function updateUserInformation(update) {
  return {
    type: types.UPDATE_USER_INFORMATION,
    payload: update
  }
}