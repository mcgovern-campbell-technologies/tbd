import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs'
import { getSkillsFullfilled, skillsWereChecked } from './../actions/actionCreators';
import { GET_SKILLS, GET_SKILLS_FULLFILLED, SKILLS_WERE_CHECKED } from '../../utils/types';

const getSkillsEpic = action$ => {
  return action$
    .ofType('GET_SKILLS')
    .mergeMap(
      action => 
        ajax.getJSON(`/api/contractor/skills?identity=${7116}`)
          .map(response => {
            console.log(response)
            return getSkillsFullfilled(response)
          })
    )
    .concat(action$.mapTo({ type: GET_SKILLS_FULLFILLED }))
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
}