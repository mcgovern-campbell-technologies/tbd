import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';


//DUMMY DATA
let id = 0;
function createData(type, skillLevel, weekDays, time, requested, filled) {
  id += 1;
  return { id, type, skillLevel, weekDays, time, requested, filled };
}
const data = [
  createData('Electrician', 1, 'M, Tu, W', '9am - 5pm', '2', '2'),
  createData('Electrician', 2, 'M, Tu, W', '9am - 5pm', '2', '2'),
  createData('Welder', 1, 'M, Tu, W, Th, F', '9am - 5pm', '1', '0'),
  createData('Magician', 1, 'M, Tu, W', '9am - 5pm', '2', '0'),
  createData('Pipe Fitter', 2, 'W, Th, F', '9am - 5pm', '2', '1'),
];
//END DUMMY DATA

const styles = {
  wrapper: {
    display: 'flex',
    height: '70vh',
  },
  leftBar: {
    backgroundColor: 'lightgrey',
    height: '100%',
    flex: '1 0 200px',
    margin: '0 10px 0 0',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    flex: '2 0 auto',
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

function TeamSummaryBox (props) {
  const testAction = () => console.log('testAction fired');
  // TODO: Fix all this.
  const teamName = props.team.properties ? props.team.properties.name : '';

  return (
    <div className={props.classes.wrapper}>
      <Paper
        className={props.classes.leftBar}
      >
        {teamName}
      </Paper>

      <Paper
        className={props.classes.main}
      >
        <div className={props.classes.buttonSection}>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            value={false}
            action={testAction}
          >
            <Tab className={props.classes.tab} label="Roles" />
            <Tab className={props.classes.tab} label="Members" />
          </Tabs>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Skill level</TableCell>
              <TableCell>Week Days</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Requested</TableCell>
              <TableCell>Filled</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell>{n.type} - {n.skillLevel}</TableCell>
                  <TableCell>{n.skillLevel}</TableCell>
                  <TableCell>{n.weekDays}</TableCell>
                  <TableCell>{n.time}</TableCell>
                  <TableCell>{n.requested}</TableCell>
                  <TableCell>{n.filled}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

TeamSummaryBox.propTypes = {
  classes: PropTypes.object.isRequired,
//   name: PropTypes.string.isRequired,
//   handleRequestDelete: PropTypes.func,
//   identity: PropTypes.string,
}

export default withStyles(styles)(TeamSummaryBox);
