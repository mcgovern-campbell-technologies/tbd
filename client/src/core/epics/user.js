import { getUserFulfilled, addUser } from '../actions/actionCreators';
import * as api from '../api/index';
import * as types from '../../utils/types';

const getUserEpic = (action$, state) => {
  const { auth } = state.getState();
  return action$
    .ofType(types.GET_USER)
    .mergeMap(action => {
      return api.getUserById(action.payload)
    })
    .map(profile => {
      //If no profile is returned from server, use locally stored auth.profile to addUser
      if (!profile || profile.error) {
        profile = auth.profile;
        return addUser(profile);
      }
      return getUserFulfilled(profile);
    })
    .catch(e => {
      console.log(e);
      return { type: "ERROR" }
    })
};

const addUserEpic = (action$) => {
  return action$
    .ofType(types.ADD_USER)
    .mergeMap(() => {
      const profileStr = window.localStorage.getItem('profile');
      const profile = JSON.parse(profileStr);
      return api.addContractor(profile)
        .map(({ response }) => response)
    })
    .map(profile => {
      return getUserFulfilled(profile)
    })
};

const dummyEmplObj = {
  "identity":"579",
  "labels":["Contractor"],
  "properties":{
    "family_name":"Grohl",
    "gender":"male",
    "given_name":"David",
    "locale":"en-GB",
    "name":"Dave Grohl",
    "nickname":"Grohlsy",
    "picture":"https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg"
  }
};

dummyEmplObj.properties = JSON.stringify(dummyEmplObj.properties);

const updateUserEpic = (action$, state) => {
  const { auth } = state.getState();
  return action$
    .ofType(types.UPDATE_USER)
    .mergeMap(action => {
      action.payload.properties = JSON.stringify(action.payload.properties);

      return api.updateContractor(action.payload)
        .map(({ response }) => response)
    })
    .map(profile => {
      //If no profile is returned from server, use locally stored auth.profile to addUser
      if (!profile || profile.error) {
        profile = auth.profile
      }
      return getUserFulfilled(profile);
    })
};

export {
  getUserEpic,
  addUserEpic,
  updateUserEpic
}
