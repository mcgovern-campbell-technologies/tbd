import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { TeamSummaryBox, TeamSummaryTable } from './componentIndex';

const styles = {
  wrapper: {
    display: 'flex',
    height: '70vh',
    paddingTop: 16,
  },
};

function TeamSummaryWrapper (props) {
  return (
    <div className={props.classes.wrapper}>
      <TeamSummaryBox
        team={props.team}
        location={props.location}
        project={props.project}
      />
      <TeamSummaryTable
        team={props.team}
        location={props.location}
        project={props.project}
        roles={props.roles}
      />
    </div>
  )
}

TeamSummaryWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
//   name: PropTypes.string.isRequired,
//   handleRequestDelete: PropTypes.func,
//   identity: PropTypes.string,
}

export default withStyles(styles)(TeamSummaryWrapper);
