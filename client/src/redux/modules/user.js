import { ajax } from 'rxjs/observable/dom/ajax';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/dom/ajax';

import { getUserFulfilled } from './../actions/userActions';
import * as types from '../../utils/types';

const getUserEpic = (action$, state) => {
  console.log(state)
  return action$
    .ofType(types.GET_USER)
    .mergeMap(action => 
      ajax.getJSON(`/api/empl/?email=${'connor@tbd.com'}`)
        .map(response => {
          getUserFulfilled(response)
        })
    )
}

const userReducer = (state = {
  skills: [
    { name: 'team work' },
    { name: 'tool and die making' },
    { name: 'precision boring' },
  ],
  certifications: [
    { name: 'CNC proficient' },
  ],
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