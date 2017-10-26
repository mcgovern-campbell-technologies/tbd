import { UPDATE_USER_INFORMATION } from '../../utils/types'

export function updateUserInformation(update) {
  return {
    type: UPDATE_USER_INFORMATION,
    payload: update
  }
}