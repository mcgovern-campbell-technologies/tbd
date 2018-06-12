import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import * as dialogActions from '../core/actions/dialog';
import { TeamSummaryRoleRow } from './componentIndex'

function TeamSummaryRoles ({ onDialogButtonPress, roles }) {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Trade</TableCell>
            <TableCell>Position level</TableCell>
            <TableCell>Requested</TableCell>
            <TableCell>Filled</TableCell>
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
        variant="fab"
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
