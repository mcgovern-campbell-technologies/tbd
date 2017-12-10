import { ajax } from 'rxjs/observable/dom/ajax';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/dom/ajax';

import { getUserFulfilled, addUser } from './../actions/actionCreators';
import * as types from '../../utils/types';

const getUserEpic = (action$, state) => {
  const { auth } = state.getState();
  const currentState = state.getState()
  return action$
    .ofType(types.GET_USER)
    .mergeMap(action => {
      return ajax.getJSON(`/api/contractor/?name=${action.payload}`)
    })
    .map(profile => {
      //If no profile is returned from server, use locally stored auth.profile to addUser
      if (!profile) {
        profile = auth.profile
        // const profileStr = window.localStorage.getItem('profile');
        // profile = JSON.parse(profileStr);
        return addUser(profile);
      }
      return !profile.error ? getUserFulfilled(profile) : addUser(profile)
    })
}

const addUserEpic = (action$, state) => {
  const { auth } = state.getState();
  return action$
    .ofType(types.ADD_USER)
    .mergeMap(action => {
      const profileStr = window.localStorage.getItem('profile');
      const profile = JSON.parse(profileStr);
      return ajax.post('/api/contractor', profile)
        .map(({ response }) => response)
    })
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
