import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router'

//Actions
import * as actionCreators from '../redux/actions/actionCreators';

import {

} from './containerIndex';

import {
  TeamManagerWrapper,
  AddTeamBox,
} from './../components/componentIndex';

class TeamManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      AddTeamBoxOpen: false,
    }

    this.toggleAddTeamBox = this.toggleAddTeamBox.bind(this)
    this.handleAddTeam = this.handleAddTeam.bind(this)
  }

  toggleAddTeamBox() {
    this.setState({AddTeamBoxOpen: !this.state.AddTeamBoxOpen})
  }

  handleAddTeam(team) {
    this.props.addTeam(team)
  }

  render() {
    return (
      <TeamManagerWrapper
        openAddTeamBox={this.toggleAddTeamBox}
      >
        <AddTeamBox
          getAllProjects={this.props.getAllProjects}
          open={this.state.AddTeamBoxOpen}
          closeAddTeamBox={this.toggleAddTeamBox}
          handleAddTeam={this.handleAddTeam}
          projects={this.props.projects.allProjects}
        />
      </TeamManagerWrapper>
    )
  }
}

function mapStateToProps({projects, teams}) {
  return {projects, teams}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamManager))
