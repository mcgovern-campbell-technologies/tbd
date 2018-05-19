import React from 'react';
import PropTypes from 'prop-types';

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import { TeamSummaryRoleRow } from './componentIndex'

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

function TeamSummaryRoles (props) {
  return (
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
            <TeamSummaryRoleRow { ...n }/>
          );
        })}
      </TableBody>
    </Table>
  )
};

export default TeamSummaryRoles;
