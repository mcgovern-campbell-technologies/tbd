import { UPDATE_USER } from '../../utils/types'

// const onBoardingEpic = action$ => {

// }

const onBoardingReducer = (state = {
  currentPage: 1,
  firstName: '',
  lastName: '',
  email: '',
  date: undefined,
  location: {

  },
  skills: {

  },
}, { type, payload}) => {
  switch (type) {
    case(UPDATE_USER):
      const { name, value } = payload
      // const subState = state[informationLocation]
      // const newSubState = Object.assign({}, subState, { [name]: value })

      // return Object.assign({}, { [informationLocation]: newSubState })
      var newState = Object.assign({}, state, {[name]: value})
      console.log(newState)
      return newState
    default:
      return state
  }
}

export {
  onBoardingReducer as default
}
