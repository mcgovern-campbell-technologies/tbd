import { ajax } from 'rxjs/observable/dom/ajax';
import { getSkillsFullfilled } from './../actions/actionCreators';
import { GET_SKILLS, GET_SKILLS_FULLFILLED } from '../../utils/types';

const getSkillsEpic = action$ => {
  return action$
    .ofType('GET_SKILLS')
    .mergeMap(action => 
      ajax.getJSON(`/api/contractor/skills?identity=${7116}`)
        .map(response => {
          console.log(response)
          return getSkillsFullfilled(response)
        })
    )
}

const skills = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SKILLS_FULLFILLED:
      console.log(GET_SKILLS_FULLFILLED, payload);
      return payload;
    default:
      return state;
  }
}

export {
  skills as default,
  getSkillsEpic,
}