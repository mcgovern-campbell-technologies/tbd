import React, { Component } from 'react';


//Actions
import * as actionCreators from '../redux/actions/actionCreators';

// import {
//
// } from './containerIndex';

import {
  TeamSummaryBox,
} from './../components/componentIndex';

class TeamDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // AddTeamBoxOpen: false,
    }

  }

  render() {
    return (
      <div>
        <TeamSummaryBox />
      </div>
    )
  }
}

export default TeamDetails
