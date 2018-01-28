import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs'

import { 
  GET_EXPERIENCES, 
  GET_EXPERIENCES_FULLFILLED, 
  ADD_EXPERIENCE,
} from '../../utils/types';

import { 
  getExperiences,
  getExperiencesFullfilled,
  addExperience,
} from './../actions/actionCreators';


const getExperiencesEpic = (action$, state) => {
  return action$
    .ofType(GET_EXPERIENCES)
    .filter(action => state.getState().user.identity)
    .mergeMap(
      action => {
        return ajax.getJSON(`/api/contractor/experience?identity=${state.getState().user.identity}`)
          .map(response => {
            return getExperiencesFullfilled(response)
          })
      }
    )
    .concat(action$.mapTo({ type: GET_EXPERIENCES_FULLFILLED }))
}

const addExperienceEpic = (action$, state) => {
  return action$
    .ofType(ADD_EXPERIENCE)
    .mergeMap(
      action => {
        return ajax.post(
          `/api/contractor/experience?identity=${state.getState().user.identity}`,
          action.payload)
          .map(result => getExperiences())
      }
    )
}

const experiences =  (state = {
  list: [],
}, action) => {
  const { type, payload } = action
  switch(type) {
    case GET_EXPERIENCES_FULLFILLED: 
      return {...state, list: payload }
    default: 
      return state
  }
}

export {
  experiences as default,
  getExperiencesEpic,
  addExperienceEpic,
}