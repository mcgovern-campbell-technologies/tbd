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
          //maps the current teams to the newState
          ...state.teams,
          //add/maps over the teamId property with an array of roleIdentities
          [teamId]: _.map(payload, role => role.identity)
        },
        roles: {
          //maps the states current roles to the new state
          ...state.roles,
          //maps the new roles to the state by identity
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

      var newState = {
        teams: {
          //cycles through the state.teams collection
          ..._.reduce(state.teams, (acc, teamRoleIds, teamId) => {
            //assigns acc[teamId] to an array where the deleted role's Id is removed
            acc[teamId] = _.remove(teamRoleIds, value => value === roleId)
            return acc
          }, {})
        },
        roles: {
          //filters the role array removing the role whos id matches the deleted roleId
          ..._.filter(state.roles, (role, key) => key !== roleId)
        }
      }

      console.log(newState);

      return newState;
    default: 
      return state;
  }
}

