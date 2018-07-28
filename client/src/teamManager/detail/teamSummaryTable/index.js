import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import TeamSummaryRoles from '../roleTab';
import TeamSummaryMembers from '../memberTab';

class TeamSummaryTable extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: 0,
    };
  }

  handleChange (event, value) {
    this.setState({value});
  }

  render() {
    const { value } = this.state;
    return (
      <Paper className="flex-grow-1">
        <div>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <Tab label="Roles" />
            <Tab label="Members" />
          </Tabs>
        </div>
        { value === 0 && <TeamSummaryRoles roles={this.props.roles}/> }
        { value === 1 && <TeamSummaryMembers members={this.props.members} /> }
      </Paper>
    )
  }
};

export default TeamSummaryTable;
