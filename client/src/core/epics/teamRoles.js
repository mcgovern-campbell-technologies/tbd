import * as _ from 'lodash';

import { 
  getTeamRoles,
  getTeamRolesFulfilled,
  addRoleToTeam,
  updateRole,
  deleteRole,
  deleteRoleFulfilled,
} from  './../actions/actionCreators';

import * as api from '../api';

import { 
  GET_TEAM_ROLES, 
  GET_TEAM_ROLES_FULFILLED, 
  ADD_ROLE_TO_TEAM, 
  UPDATE_ROLE, 
  DELETE_ROLE, 
  DELETE_ROLE_FULFILLED,
} from '../../utils/types';

export const getTeamRolesEpic = (action$) => 
  action$
    .ofType(GET_TEAM_ROLES)
    .mergeMap(
      action => 
        api
          .getTeamRoles(action.teamId)
          .map(response => getTeamRolesFulfilled(action.teamId ,response))
    );

export const deleteRoleEpic = action$ => {
  action$
    .ofType(DELETE_ROLE)
    .mergeMap(
      action => 
        api
          .deleteRole(action.roleId)
          .map(response => {
            console.log(response)
            return deleteRoleFulfilled(action.roleId)
          })
    )
}