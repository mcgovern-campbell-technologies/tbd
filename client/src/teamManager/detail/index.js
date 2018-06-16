import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router'

import * as actionCreators from '../../core/actions/actionCreators';
import TeamSummaryBox from './teamSummaryBox';
import TeamSummaryTable from './teamSummaryTable';

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
      <div className="flex min-vh-60 relative">
        <TeamSummaryBox
          team={this.props.teams.team}
          location={this.props.teams.location}
          project={this.props.teams.project}
        />
        <TeamSummaryTable
          team={this.props.teams.team}
          location={this.props.teams.location}
          project={this.props.teams.project}
          roles={this.props.teamRoles.teams[this.state.teamId] || []}
        />
      </div>
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
