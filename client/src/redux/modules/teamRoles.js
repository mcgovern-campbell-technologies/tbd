import * as _ from 'lodash';

import { 
  getTeamRoles,
  getTeamRolesFulfilled,
  addRoleToTeam,
  updateRole,
  deleteRole,
  deleteRoleFulfilled,
} from  './../actions/actionCreators';

import * as api from '../../core/api';

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
          .deleteRole(acton.roleId)
          .map(response => {
            console.log(response)
            return deleteRoleFulfilled(action.roleId)
          })
    )
}

export default (state = {
  /*
    roles will be organized by 
    teams : {
      teamId: [ roleId, roleId, ... ],
      ...
    }
    roles : {
      roleId: roleObject,
      ...
    }
  */
  teams: {},
  roles: {},
}, action) => {

  //some of these are undefined depending on usage
  const { type, teamId, payload, roleId } = action

  switch (type) {
    case GET_TEAM_ROLES_FULFILLED:

      var newState = {
        teams: {
          ...state.teams,
          [teamId]: _.map(payload, role => role.identity)
        },
        roles: {
          ...state.roles,
          ..._.reduce(payload, (acc, role) => {
            acc[role.identity] = role
            return acc
          }
          , {})
        }
      }

      return newState;

    case DELETE_ROLE_FULFILLED:

      console.log('hit DELETE_ROLE_FULFILLED')

      // var

      var newState = {
        ...state.roles
      }

      newState.roles[]

      // return newState;
      return state;
    default: 
      return state;
  }
}

