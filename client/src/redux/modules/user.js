import { ajax } from 'rxjs/observable/dom/ajax';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/dom/ajax';

import { getUserFulfilled, addUser } from './../actions/actionCreators';
import * as types from '../../utils/types';

const getUserEpic = (action$, state) => {
  const { auth } = state.getState();
  return action$
    .ofType(types.GET_USER)
    .mergeMap(action =>
      ajax.getJSON(`/api/contractor/?name=${auth.profile.name}`))
    .map(profile => {
      //If no profile is returned from server, use locally stored auth.profile to addUser
      if (!profile) return addUser(auth.profile);
      return !profile.error ? getUserFulfilled(profile) : addUser(profile)
    })
}

const addUserEpic = (action$, state) => {
  const { auth } = state;
  return action$
    .ofType(types.ADD_USER)
    .mergeMap(action =>
      ajax.post('/api/contractor', state.getState().auth.profile)
        .map(({ response }) => response))
    .map(profile => {
      return getUserFulfilled(profile)
    })
}

const userReducer = (state = {
  properties: {},
  identity: undefined,
  labels: [],
}, action) => {
  const { type, payload } = action;
  switch(type) {
    case types.GET_USER_FULFILLED:
      console.log('in GET_USER_FULFILLED')
      return payload;
    default:
      return state;
  }
}

export {
  userReducer as default,
  getUserEpic,
  addUserEpic
}
