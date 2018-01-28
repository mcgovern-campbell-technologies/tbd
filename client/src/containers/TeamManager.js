import React, { Component } from 'react';
import { connect } from 'react-redux';

import {

} from './containerIndex';
import {
  TeamManagerWrapper,
} from './../components/componentIndex';

class TeamManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      AddTeamBoxOpen: false,
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