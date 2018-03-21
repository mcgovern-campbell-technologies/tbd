import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router'

//Actions
import * as actionCreators from '../redux/actions/actionCreators';

import {
  TeamSummaryBox,
} from './../components/componentIndex';

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
      <div>
        <TeamSummaryBox
          team={this.props.teams.team}
          location={this.props.teams.location}
          project={this.props.teams.project}
        />
      </div>
    )
  }
}


function mapStateToProps({projects, teams}) {
  return {projects, teams}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamDetails))
