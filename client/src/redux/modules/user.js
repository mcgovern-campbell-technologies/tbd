import { ajax } from 'rxjs/observable/dom/ajax';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/dom/ajax';

import { getUserFullfilled } from './../actions/userActions';
import * as types from '../../utils/types';

const getUserEpic = (action$, state) => {
  console.log('hit getUserEpic')
  return action$
    .ofType(types.GET_USER)
    .mergeMap(action => 
      ajax.getJSON(`/api/empl/?email=${'connor@tbd.com'}`)
        .map(response => {
          console.log('inside ajax respoinse')
          console.log(response)
          // getUserFullfilled(response)
        })
    )

}

const userReducer = (state = {
  profile: null,
  skills: [],
  certifications: [],
  location: null,

}, action) => {
  const { type, payload } = action;
  switch(type) {
    case types.GET_USER_FULFILLED:
      return state;
    default:
      return state;
  }
}

export {
  userReducer as default,
  getUserEpic,
}