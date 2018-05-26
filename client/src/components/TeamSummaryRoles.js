import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

import * as dialogActions from '../core/actions/dialog';

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

function TeamSummaryRoles ({ onDialogButtonPress, roles }) {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Skill level</TableCell>
            <TableCell>Week Days</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Requested</TableCell>
            <TableCell>Filled</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map(n => {
            return (
              <TeamSummaryRoleRow key={n.id} node={n} handleEditButtonClick={() => console.log('editme')}/>
            );
          })}
        </TableBody>
      </Table>
      <Button
        fab mini
        aria-label="add"
        className='fr'
        onClick={() => onDialogButtonPress()}
      >
        <AddIcon />
      </Button>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onDialogButtonPress: () => dispatch(dialogActions.openDialog('ADD_ROLE')),
  }
}

export default withRouter(connect(undefined, mapDispatchToProps)(TeamSummaryRoles))
