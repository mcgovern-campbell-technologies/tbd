import {
  getExperiences,
  getExperiencesFullfilled,
} from '../actions/actionCreators';
import * as api from '../api/index';
import {
  GET_EXPERIENCES,
  GET_EXPERIENCES_FULLFILLED,
  ADD_EXPERIENCE,
  DELETE_EXPERIENCE,
  EDIT_EXPERIENCE
} from '../../utils/types';

const getExperiencesEpic = (action$, state) => {
  return action$
    .ofType(GET_EXPERIENCES)
    .filter(action => state.getState().user.identity)
    .mergeMap(action =>
      api.getContractorExperiences(state.getState().user.identity)
        .map(response => getExperiencesFullfilled(response))
    )
    .concat(action$.mapTo({ type: GET_EXPERIENCES_FULLFILLED }))
};

const addExperienceEpic = (action$, state) => {
  return action$
    .ofType(ADD_EXPERIENCE)
    .mergeMap(action =>
      api.addContractorExperience(
        state.getState().user.identity,
        action.payload
      )
    )
    .throttleTime(500)
    .map(result => getExperiences())
    .catch(e => {
      console.log(e);
      return {type: 'error'}
    })
};

const deleteExperienceEpic = (action$, state) =>
  action$
    .ofType(DELETE_EXPERIENCE)
    .mergeMap(action => api.deleteContractorExperience(action.payload))
    .map(response =>  {
      if (response.status >= 200 && response.status < 300) {
        return getExperiences()
      }
    })
    .catch(e => ({type: 'error'}));

const editExperienceEpic = (action$, state) =>
  action$
    .ofType(EDIT_EXPERIENCE)
    .mergeMap(
      action => api.editContractorExperience(
        action.payload.identity,
        action.payload.properties
      )
    )
    //Im the dirties
    //TODO make this actually a real thing
    .throttleTime(500)
    .map(response => getExperiences())
    .catch(e => ({type: 'error'}));

export {
  getExperiencesEpic,
  addExperienceEpic,
  deleteExperienceEpic,
  editExperienceEpic,
}
