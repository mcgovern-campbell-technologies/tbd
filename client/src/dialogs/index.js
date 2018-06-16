import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AddRoleDialog from './AddRoleDialog';
import AddTeamDialog from './AddTeamDialog';

const DIALOG_COMPONENTS = {
  'ADD_ROLE': AddRoleDialog,
  'ADD_TEAM': AddTeamDialog,
};

const DialogRoot = ({ dialog }) => {
  if (!dialog.type) {
    return null;
  }

  const SpecificDialog = DIALOG_COMPONENTS[dialog.type];
  return <SpecificDialog />
};

function mapStateToProps(state) {
  return {
    dialog: state.dialog,
  }
}

export default withRouter(connect(mapStateToProps)(DialogRoot))
