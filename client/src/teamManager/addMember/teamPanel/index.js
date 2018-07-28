import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import classNames from 'classnames';

import * as uiActions from '../../../core/actions/ui';

const TeamPanel = ({ roles, onSelectRole, ui }) => (
  <List component="nav" className="flex-2 border-r pt0">
    <Divider />
      {
        roles.map(role => (
          <ListItem
            button
            className={classNames(
              'flex',
              'justify-between',
              {'bg-black-10': ui.selectedRoleId === role.id}
            )}
            key={role.id}
            onClick={() => onSelectRole(role.id)}
          >
            <p className="mr2">{role.name}</p>
            <p>0/{role.totalPositions}</p>
          </ListItem>
        ))
      }
    <Divider />
  </List>
);

function mapStateToProps({ui}) {
  return {ui}
}

function mapDispatchToProps(dispatch) {
  return {
    onSelectRole: (id) => dispatch(uiActions.selectRole(id)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamPanel))