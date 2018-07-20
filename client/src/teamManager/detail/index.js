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
  }

  render() {
    return (
      <div className="flex min-vh-60 relative">
        <TeamSummaryBox
          team={this.props.team}
        />
        <TeamSummaryTable
          roles={this.props.team.roles}
        />
      </div>
    )
  }
}


function mapStateToProps({projects, team}) {
  return {projects, team}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamDetails))
