import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import {
  validateProperties,
} from './../utils/validations';


class AddTeamBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      teamName: '',
      projectId: '',
      startDate: '',
      endDate: '',
      warningBoxOpen: false,
    }

    this.handleAccept = this.handleAccept.bind(this);
  }

  componentDidMount() {
    this.props.getAllProjects()
  }

  checkProperties() {
    return validateProperties({
      teamName: (value) => value.length > 0,
      projectId: (value) => value.length > 0,
      startDate: (value, state) => {
        return new Date(value) < new Date(state['endDate']);
      }
    }, this.state)
  }

  handleFormUpdates(stateKey) {
    return (e) => {
      this.setState({ [stateKey]: e.target.value });
    }
  }

  handleAccept() {
    if (this.checkProperties()) {
      console.log('passing')

      const team = {
        ...this.state
      }

      delete team.warningBoxOpen

      this.props.handleAddTeam(team);
      this.props.closeAddTeamBox();
    } else {
      console.log('fails')
    }
  }

  render() {
    const { closeAddTeamBox, projects } = this.props;
    return (
      <Dialog
        open={this.props.open}
      >
        <DialogTitle>
          { 'Create Team' }
        </DialogTitle>
        <DialogContent>
          <div className="db">
            <TextField
              label="Team Name"
              type="text"
              value={this.state.teamName}
              fullWidth
              onChange={this.handleFormUpdates('teamName')}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

          <div className="db">
            <TextField
              label="Project"
              select
              type="select"
              value={this.state.projectId}
              fullWidth
              onChange={this.handleFormUpdates('projectId')}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            >
              {this.props.projects.map(project => (
                <MenuItem key={project.identity} value={project.identity}>
                  {project.properties.name}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className="db">
            <div className="mh1 dib">
              <TextField
                label="Start Date"
                type="date"
                defaultValue={''}
                fullWidth={false}
                onChange={this.handleFormUpdates('startDate')}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="mh1 dib">
              <TextField
                label="End Date"
                type="date"
                defaultValue={''}
                fullWidth={false}
                onChange={this.handleFormUpdates('endDate')}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={closeAddTeamBox}
          >
            CANCEL
          </Button>
          <Button
            onClick={this.handleAccept}
          >
            ACCEPT
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

AddTeamBox.propTypes = {
  open: PropTypes.bool.isRequired,
  closeAddTeamBox: PropTypes.func.isRequired,
  handleAddTeam: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired,
}

export default AddTeamBox;
