import {
  getTeamRoles,
  getTeamRolesFulfilled,
  updateRoleFulfilled,
  deleteRoleFulfilled,
} from  '../actions/actionCreators';
import { closeDialog } from '../actions/dialog';

import * as api from '../api';

import { 
  GET_TEAM_ROLES, 
  ADD_ROLE_TO_TEAM, 
  UPDATE_ROLE, 
  DELETE_ROLE, 
} from '../utils/types';

export const addRoleToTeamEpic = (action$, store) =>
  action$
    .ofType(ADD_ROLE_TO_TEAM)
    .switchMap(
      action => 
        api
          .addRoleToTeam(store.getState().teams.team.identity, store.getState().form.role.values)
    )
    .map(() => getTeamRoles(store.getState().teams.team.identity))
    .map(closeDialog);

export const getTeamRolesEpic = (action$) => 
  action$
    .ofType(GET_TEAM_ROLES)
    .mergeMap(
      action => 
        api
          .getTeamRoles(action.teamId)
          .map(response => getTeamRolesFulfilled(action.teamId ,response))
    );

export const updateRoleEpic = action$ => 
  action$
    .ofType(UPDATE_ROLE)
    .mergeMap(
      action => 
        api
          .updateRole(action.roleId, action.properties)
          .map(response => updateRoleFulfilled(action.roleId, response))
    )

export const deleteRoleEpic = action$ => 
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
