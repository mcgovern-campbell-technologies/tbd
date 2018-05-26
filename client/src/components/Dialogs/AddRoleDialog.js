import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import Dialog, {
  DialogContent,
  DialogTitle,
  DialogActions,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';

import * as dialogActions from '../../core/actions/dialog';
import * as actionCreators from '../../core/actions/actionCreators';
import { Text } from '../Forms';

function AddRoleDialog({ onDialogButtonClose, onAddRoleDialog }) {
  return (
    <Dialog open={true}>
      <DialogTitle>Add Role</DialogTitle>
      <DialogContent>
        <Field
          name="name"
          label="Name"
          component={Text}
          type="text"

        />
        <Field
          name="type"
          label="Type"
          component={Text}
          type="text"
        />
        <Field
          name="skillLevel"
          label="Skill Level"
          component={Text}
          type="text"
        />
        <Field
          name="position"
          label="# of Positions"
          component={Text}
          type="text"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onDialogButtonClose}>
          CANCEL
        </Button>
        <Button onClick={onAddRoleDialog}>
          ACCEPT
        </Button>
      </DialogActions>
    </Dialog>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onDialogButtonClose: () => dispatch(dialogActions.closeDialog()),
    onAddRoleDialog: () => dispatch(actionCreators.addRoleToTeam()),
  }
}

export default withRouter(connect(undefined, mapDispatchToProps)(
  reduxForm({
    form: 'addRole',
  })(AddRoleDialog)
))
