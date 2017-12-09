import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs'
import { getSkillsFullfilled, skillsWereChecked } from './../actions/actionCreators';
import { 
  GET_SKILLS, 
  GET_SKILLS_FULLFILLED, 
  SKILLS_WERE_CHECKED,
  ADD_SKILL,
} from '../../utils/types';

const getSkillsEpic = (action$, state) => {
  return action$
    .ofType(GET_SKILLS)
    .mergeMap(
      action => {
        return ajax.getJSON(`/api/contractor/skills?identity=${action.payload}`)
          .map(response => {
            console.log(response)
            return getSkillsFullfilled(response)
          })
      }
    )
    .concat(action$.mapTo({ type: GET_SKILLS_FULLFILLED }))
}

const addSkillEpic = (action$, state) => {
  return action$
    .ofType(ADD_SKILL)
    .mergeMap(
      action => {
        const { identity } = state.getState().user;
        return ajax.post(`/api/contractor/skills?identity=${identity}`, action.payload)
          .map(({ response }) => {
            return getSkillsFullfilled(response)
          })
      }
    )
}

const skills = (state = { 
  list: [],
  checked: false 
}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SKILLS_FULLFILLED:
      return Object.assign({}, state, { list: payload });
    case SKILLS_WERE_CHECKED:
      return Object.assign({}, state, { checked: true });
    default:
      return state;
  }
}

export {
  skills as default,
  getSkillsEpic,
  addSkillEpic,
}