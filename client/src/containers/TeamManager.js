import React, { Component } from 'react';
import { connect } from 'react-redux';

import {

} from './containerIndex';
import {
  TeamManagerWrapper,
  AddTeamBox,
} from './../components/componentIndex';

const dummyLocations = [
  { label: 'dummy1', value: 'dummy1'},
  { label: 'dummy2', value: 'dummy2'}
]

const dummyProjects = [
  { label: 'dummyLabel1', value: 'dummyValue1'},
  { label: 'dummyLabel2', value: 'dummyValue2'}
]

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
    console.log(this.state)
  }

  handleAddTeam(team) {
    console.log(team)
  }

  render() {

    return (
      <TeamManagerWrapper
        openAddTeamBox={this.toggleAddTeamBox}
      >
        <AddTeamBox 
          open={this.state.AddTeamBoxOpen}
          closeAddTeamBox={this.toggleAddTeamBox}
          handleAddTeam={this.handleAddTeam}
          projects={dummyProjects}
          locations={dummyLocations}
        />
      </TeamManagerWrapper>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {

  }
}


export default TeamManager