import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

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
