import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import * as dialogActions from '../../core/actions/dialog';
import * as actionCreators from '../../core/actions/actionCreators';
import { Text } from '../Forms';

function AddRoleDialog({ onDialogButtonClose, onAddRole }) {
  return (
    <Dialog open={true}>
      <DialogTitle>Add Role</DialogTitle>
      <DialogContent>
        <Field
          name="name"
          label="Name"
          component={Text}
        />
        <Field
          name="trade"
          label="Trade"
          component={Text}
        />
        <Field
          name="skillLevel"
          label="Skill Level"
          component={Text}
        />
        <Field
          name="position"
          label="# of Positions"
          component={Text}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onDialogButtonClose}>
          CANCEL
        </Button>
        <Button onClick={onAddRole}>
          ACCEPT
        </Button>
      </DialogActions>
    </Dialog>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onDialogButtonClose: () => dispatch(dialogActions.closeDialog()),
    onAddRole: () => dispatch(actionCreators.addRoleToTeam()),
  }
}

export default withRouter(connect(undefined, mapDispatchToProps)(
  reduxForm({
    form: 'role',
  })(AddRoleDialog)
))
