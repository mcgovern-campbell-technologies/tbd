import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

function TeamSummaryMembers (props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Position</TableCell>
          <TableCell>Position Level</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(n => {
          return (
            <TableRow key={n.id}>
              <TableCell>John Smith</TableCell>
              <TableCell>{n.type}</TableCell>
              <TableCell>{n.skillLevel}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  )
};

TeamSummaryMembers.propTypes = {
  classes: PropTypes.object.isRequired,
//   name: PropTypes.string.isRequired,
//   handleRequestDelete: PropTypes.func,
//   identity: PropTypes.string,
}

export default withStyles(styles)(TeamSummaryMembers);
