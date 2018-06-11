import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import * as dialogActions from '../../core/actions/dialog';
import * as actionCreators from '../../core/actions/actionCreators';
import { Dropdown, Text } from '../Forms';

function AddTeamDialog({ onDialogButtonClose, onAddRoleDialog, projects }) {
  return (
    <Dialog open={true}>
      <DialogTitle>Add Role</DialogTitle>
      <DialogContent>
        <Field
          name="name"
          label="Team Name"
          component={Text}
          type="text"

        />
        <Field
          name="project"
          label="Project"
          component={Dropdown}
        >
          {projects.allProjects.map(project => (
            <MenuItem key={project.identity} value={project.identity}>
              {project.properties.name}
            </MenuItem>
          ))}
        </Field>
        <Field
          name="startDate"
          label="Start Date"
          component={({ value }) => <TextField
            label="Start Date"
            type="date"
          />}
          type="date"
        />
        <Field
          name="endDate"
          label="End Date"
          component={() => <TextField
            label="End Date"
            type="date"
          />}
          type="date"
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

function mapStateToProps({ projects }) {
  return { projects }
}

function mapDispatchToProps(dispatch) {
  return {
    onDialogButtonClose: () => dispatch(dialogActions.closeDialog()),
    onAddRoleDialog: () => dispatch(actionCreators.addRoleToTeam()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'addTeam',
  })(AddTeamDialog)
))
