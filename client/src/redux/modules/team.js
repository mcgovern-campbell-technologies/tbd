import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs'
import { addTeam } from './../actions/actionCreators';
import {
  ADD_TEAM,
} from '../../utils/types';

const DOMAIN = window.location.host || 'localhost'

const addTeamEpic = (action$, state) => {
  return action$
    .ofType(ADD_TEAM)
    .mergeMap(
      action => {
        return ajax.post(`http://${DOMAIN}:4000/api/team`, action.payload)
          .map(({response}) => {
            console.log(response);
            return;
          })
      }
    )
}

export {
  addTeamEpic,
}
