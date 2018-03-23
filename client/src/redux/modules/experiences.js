import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs'

import {
  GET_EXPERIENCES,
  GET_EXPERIENCES_FULLFILLED,
  ADD_EXPERIENCE,
  DELETE_EXPERIENCE,
  EDIT_EXPERIENCE
} from '../../utils/types';

import {
  getExperiences,
  getExperiencesFullfilled,
  addExperience,
} from './../actions/actionCreators';

const DOMAIN = window.location.host || 'localhost'

const getExperiencesEpic = (action$, state) => {
  return action$
    .ofType(GET_EXPERIENCES)
    .filter(action => state.getState().user.identity)
    .mergeMap(
      action => {
        return ajax.getJSON(`http://${DOMAIN}:4000/api/contractor/experience?identity=${state.getState().user.identity}`)
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
        console.log(action)
        return ajax.post(
          `http://${DOMAIN}:4000/api/contractor/experience?identity=${state.getState().user.identity}`,
          action.payload)
      }
    )
    .throttleTime(500)
    .map(result => {
      console.log(result)
      return getExperiences()
    })
    .catch(e => {
      console.log(e)
      return {type: 'error'}
    })
}

const deleteExperienceEpic = (action$, state) => 
  action$
    .ofType(DELETE_EXPERIENCE)
    .mergeMap(action => {
      return ajax({
        createXHR: () => new XMLHttpRequest(),
        crossDomain: true,
        method: 'DELETE',
        url: `http://${DOMAIN}:4000/api/contractor/experience?identity=${action.payload}`
      })
    })
    .map(response =>  {
      if (response.status >= 200 && response.status < 300) {
        return getExperiences()
      }
    })
    .catch(e => {
      return {type: 'error'}
    })

const editExperienceEpic = (action$, state) => 
  action$
    .ofType(EDIT_EXPERIENCE)
    .mergeMap(
      action => 
        ajax.put(
          `http://${DOMAIN}:4000/api/contractor/experience?identity=${action.payload.identity}`,
          action.payload.properties
        )
    )
    //Im the dirties
    //TODO make this actually a real thing
    .throttleTime(500)
    .map(response => {
      return getExperiences()
    })
    .catch(e => {
      return {type: 'error'}
    })



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
  deleteExperienceEpic,
}
