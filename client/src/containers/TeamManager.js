import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      AddTeamBoxOpen: true,
    }

    this.toggleAddTeamBox = this.toggleAddTeamBox.bind(this)
  }

  toggleAddTeamBox() {
    this.setState({AddTeamBoxOpen: !this.state.AddTeamBoxOpen})
    console.log(this.state)
  }

  render() {
    return (
      <TeamManagerWrapper
        openAddTeamBox={this.toggleAddTeamBox}
      >
        <AddTeamBox 
          open={this.state.AddTeamBoxOpen}
          closeAddTeamBox={this.toggleAddTeamBox}
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