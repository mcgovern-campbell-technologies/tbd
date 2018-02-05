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
} from '../../utils/types';

const getCertificationsEpic = (action$, state) =>
  action$
    .ofType(GET_CERTIFICATIONS)
    .mergeMap(action => {
      return ajax.getJSON(`/api/contractor/certifications?identity=${state.getState().user.identity}`)
          .map(response => {
            return getCertificationsFulfilled(response)
          })
    })

const addCertificationEpic = (action$, state) =>
  action$
    .ofType(ADD_CERTIFICATION)
    .mergeMap(
      action =>
        ajax.post(`/api/contractor/certifications?identity=${state.getState().user.identity}`, action.payload)
          .map(response => {
            console.log(response)
            return getCertifications()
          })
    )

const certifications = (state = {
  list: [],
}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CERTIFICATIONS_FULFILLED:
      // Prevent error when payload is falsy
      const list = payload || [];
      return {
        ...state,
        list
      };
    default:
      return state;
  }
}

export {
  certifications as default,
  getCertificationsEpic,
  addCertificationEpic,
}
