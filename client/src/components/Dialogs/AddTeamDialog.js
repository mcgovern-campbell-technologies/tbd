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

import * as dialogActions from '../../core/actions/dialog';
import * as actionCreators from '../../core/actions/actionCreators';
import { Select, Text, Date } from '../Forms';

function AddTeamDialog({ onDialogButtonClose, onAddTeam, projects }) {
  return (
    <Dialog open={true}>
      <DialogTitle>Add Role</DialogTitle>
      <DialogContent>
        <Field
          name="teamName"
          label="Team Name"
          component={Text}
        />
        <Field
          name="projectId"
          label="Project"
          component={Select}
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
          component={Date}
        />
        <Field
          name="endDate"
          label="End Date"
          component={Date}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onDialogButtonClose}>
          CANCEL
        </Button>
        <Button onClick={onAddTeam}>
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
    onAddTeam: () => dispatch(actionCreators.addTeam()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'team',
  })(AddTeamDialog)
))
