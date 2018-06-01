import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router'

//Actions
import * as actionCreators from '../core/actions/actionCreators';

import { TeamSummaryWrapper } from './../components/componentIndex';

class TeamDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teamId: this.props.match.params.teamId,
    }

  }

  componentWillMount() {
    this.props.getTeam(this.state.teamId);
    this.props.getTeamRoles(this.state.teamId);
  }

  render() {
    return (
      <TeamSummaryWrapper
        team={this.props.teams.team}
        roles={this.props.teamRoles.teams[this.state.teamId] || []}
        location={this.props.teams.location}
        project={this.props.teams.project}
      />
    )
  }
}


function mapStateToProps({projects, teams, teamRoles}) {
  return {projects, teams, teamRoles}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamDetails))
