import { UPDATE_USER } from '../utils/types'

export function onBoardingReducer(state = {
  currentPage: 1,
  firstName: '',
  lastName: '',
  email: '',
  date: undefined,
  location: {

  },
  skills: {

  },
}, { type, payload}) {
  switch (type) {
    case(UPDATE_USER):
      const { name, value } = payload;
      return {
        ...state,
        [name]: value,
      };
    default:
      return state
  }
}