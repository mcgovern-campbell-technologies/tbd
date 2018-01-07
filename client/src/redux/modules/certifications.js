import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs'

import { getCertificationsFulfilled } from './../actions/actionCreators';

import {
  GET_CERTIFICATIONS,
  GET_CERTIFICATIONS_FULFILLED,
} from '../../utils/types';

const getCertificationsEpic = (action$, state) => 
  action$
    .ofType(GET_CERTIFICATIONS)
    .mergeMap(action => {
      const { identity } = state.getState().user
      console.log(identity)
      return ajax.getJSON(`/api/contractor/certifications?identity=${identity}`)
          .map(response => {
            console.log(response)
            // return getCertificationsFulfilled(response)
          })
    })

      getCertificationsFulfilled();

const certifications = (state = {
  list: [],
}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CERTIFICATIONS_FULFILLED:
      console.log(GET_CERTIFICATIONS, payload)
      return { ...state, list: payload };
    default: 
      return state;
  }
}

export {
  certifications as default,
  getCertificationsEpic
}