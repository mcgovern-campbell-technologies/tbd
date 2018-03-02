import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs'

import {
  getCertificationsFulfilled,
  getCertifications,
} from './../actions/actionCreators';

import {
  GET_CERTIFICATIONS,
  GET_CERTIFICATIONS_FULFILLED,
  ADD_CERTIFICATION,
  DELETE_CERTIFICATION,
  EDIT_CERTIFICATION, 
} from '../../utils/types';

const DOMAIN = window.location.host || 'localhost'

const getCertificationsEpic = (action$, state) =>
  action$
    .ofType(GET_CERTIFICATIONS)
    .mergeMap(action => {
      return ajax.getJSON(`http://${DOMAIN}:4000/api/contractor/certifications?identity=${state.getState().user.identity}`)
          .map(response => {
            return getCertificationsFulfilled(response)
          })
    })

const deleteCertificationEpic = (action$, state) =>
  action$
    .ofType(DELETE_CERTIFICATION)
    .mergeMap(action => {
      return ajax({
        createXHR: () => new XMLHttpRequest(),
        crossDomain: true,
        method: 'DELETE',
        url: `http://${DOMAIN}:4000/api/contractor/certifications?identity=${action.payload}`
      })
    })
    .map(response =>  {
      if (response.status >= 200 && response.status < 300) {
        return getCertifications()
      }
    })
    .catch(e => {
      return {type: 'error'}
    })

const addCertificationEpic = (action$, state) =>
  action$
    .ofType(ADD_CERTIFICATION)
    .mergeMap(
      action =>
        ajax.post(`http://${DOMAIN}:4000/api/contractor/certifications?identity=${state.getState().user.identity}`, action.payload)
    )
    .map(response => {
      return getCertifications()
    })

const certifications = (state = {
  list: [],
}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CERTIFICATIONS_FULFILLED:
      return {...state, list: payload }
    default:
      return state;
  }
}

export {
  certifications as default,
  getCertificationsEpic,
  addCertificationEpic,
  deleteCertificationEpic,
}
