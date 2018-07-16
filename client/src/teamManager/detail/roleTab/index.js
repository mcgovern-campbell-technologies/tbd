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

import * as dialogActions from '../../../core/actions/dialog';

function RoleTab ({ onDialogButtonPress, roles }) {
  return (
    <div>
      <Table className="mb6">
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
          {roles.map(role => {
            return (
              <TableRow key={role.id}>
                <TableCell>{role.name}</TableCell>
                <TableCell>{role.trade}</TableCell>
                <TableCell>{role.skillLevel}</TableCell>
                <TableCell>0/{role.totalPositions}</TableCell>
                <TableCell>0/{role.totalPositions}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Button
        variant="fab"
        aria-label="add"
        className="absolute bottom-1 right-1"
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

export default withRouter(connect(undefined, mapDispatchToProps)(RoleTab))
