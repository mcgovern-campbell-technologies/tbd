import * as _ from 'lodash';

import { 
  GET_TEAM_ROLES_FULFILLED,   
  UPDATE_ROLE_FULFILLED, 
  DELETE_ROLE_FULFILLED,
} from '../../utils/types';

export const teamRolesReducer =  (state = {
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

      return newState;
    case UPDATE_ROLE_FULFILLED:
      var newState = {
        ...state,
        roles: {
          ...state.roles,
          [roleId]: payload
        }
      }

      return newState;

    default: 
      return state;
  }
}