import { getSkillsFullfilled, getSkills } from './../actions/actionCreators';
import * as api from '../../core/api';
import {
  GET_SKILLS,
  GET_SKILLS_FULLFILLED,
  SKILLS_WERE_CHECKED,
  ADD_SKILL,
  DELETE_SKILL,
} from '../../utils/types';

const getSkillsEpic = (action$, state) => {
  return action$
    .ofType(GET_SKILLS)
    .mergeMap(
      action => {
        const { identity } = state.getState().user;
        return api.getContractorSkills(identity)
          .map(response => {
            return getSkillsFullfilled(response)
          })
      }
    )
    .concat(action$.mapTo({ type: GET_SKILLS_FULLFILLED }))
};

const addSkillEpic = (action$, state) => {
  return action$
    .ofType(ADD_SKILL)
    .mergeMap(
      action => {
        const { identity } = state.getState().user;
        return api.addContractorSkill(identity, action.payload)
          .map(({ response }) => {
            return getSkillsFullfilled(response)
          })
      }
    )
};

const deleteSkillEpic = (action$) => {
  return action$
    .ofType(DELETE_SKILL)
    .mergeMap(
      action =>
        api.deleteContractorSkill(action.payload)
          .map(response => getSkills())
    )
};

const skills = (state = {
  list: [],
  checked: false
}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SKILLS_FULLFILLED:
      return Object.assign({}, state, { list: payload || [] });
    case SKILLS_WERE_CHECKED:
      return Object.assign({}, state, { checked: true });
    default:
      return state;
  }
};

export {
  skills as default,
  getSkillsEpic,
  addSkillEpic,
  deleteSkillEpic,
}
