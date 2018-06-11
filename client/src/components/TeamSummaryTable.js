import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

import {TeamSummaryRoles, TeamSummaryMembers} from './componentIndex';

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    flex: '2 0 66%',
    margin: '0 0 0 10px',
  },
  buttonSection: {
    flexBasis: '50px',
    marginBottom: '10px',
  },
  tab: {
    minWidth: '120px',
  },
};

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
      <Paper className={this.props.classes.main}>
        <div className={this.props.classes.buttonSection}>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <Tab className={this.props.classes.tab} label="Roles" />
            <Tab className={this.props.classes.tab} label="Members" />
          </Tabs>
        </div>
        { value === 0 && <TeamSummaryRoles roles={this.props.roles}/> }
        { value === 1 && <TeamSummaryMembers /> }
      </Paper>
    )
  }
};

TeamSummaryTable.propTypes = {
  classes: PropTypes.object.isRequired,
//   name: PropTypes.string.isRequired,
//   handleRequestDelete: PropTypes.func,
//   identity: PropTypes.string,
}

export default withStyles(styles)(TeamSummaryTable);
