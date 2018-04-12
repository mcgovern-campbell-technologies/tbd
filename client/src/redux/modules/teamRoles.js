import { 
  getTeamRoles,
  getTeamRolesFulfilled,
  addRoleToTeam,
  updateRole,
  deleteRole,
} from  './../actions/actionCreators'

import * as api from '../../core/api';

import { 
  GET_TEAM_ROLES, 
  GET_TEAM_ROLES_FULFILLED, 
  ADD_ROLE_TO_TEAM, 
  UPDATE_ROLE, 
  DELETE_ROLE, 
} from '../../utils/types'