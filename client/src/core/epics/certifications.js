import {
  getCertificationsFulfilled,
  getCertifications,
} from '../actions/actionCreators';
import * as api from '../api/index';
import {
  GET_CERTIFICATIONS,
  ADD_CERTIFICATION,
  DELETE_CERTIFICATION,
  EDIT_CERTIFICATION, 
} from '../../utils/types';

const getCertificationsEpic = (action$, state) =>
  action$
    .ofType(GET_CERTIFICATIONS)
    .mergeMap(action =>
      api.getContractorCertifications(state.getState().user.identity)
        .map(response => getCertificationsFulfilled(response))
    );

const deleteCertificationEpic = (action$, state) =>
  action$
    .ofType(DELETE_CERTIFICATION)
    .mergeMap(action => api.deleteContractorCertification(action.payload))
    .map(response =>  {
      if (response.status >= 200 && response.status < 300) {
        return getCertifications()
      }
    })
    .catch(e => ({type: 'error'}));

const addCertificationEpic = (action$, state) =>
  action$
    .ofType(ADD_CERTIFICATION)
    .mergeMap(
      action => api.addContractorCertification(
        state.getState().user.identity,
        action.payload
      )
    )
    .map(response => getCertifications());

const editCertificationEpic = (action$, state) => 
  action$
    .ofType(EDIT_CERTIFICATION)
    .mergeMap(
      action => api.editContractorCertification(
        action.payload.identity,
        action.payload.properties,
      )
    )
    //Im the dirties
    //TODO make this actually a real thing
    .throttleTime(500)
    .map(response => getCertifications())
    .catch(e => ({type: 'error'}));

export {
  getCertificationsEpic,
  addCertificationEpic,
  deleteCertificationEpic,
  editCertificationEpic,
}
