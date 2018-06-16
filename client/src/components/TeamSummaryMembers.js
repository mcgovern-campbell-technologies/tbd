import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//DUMMY DATA
let id = 0;
function createData(name, type, skillLevel, rate, status) {
  id += 1;
  return { id, name, type, skillLevel, rate, status };
}
const data = [
  createData('Joe Schmo', 'Electrician', 1, 22, 1),
  createData('Derek Zoolander', 'Electrician', 2, 20, 1),
  createData('Jack Johnson', 'Welder', 1, 18, 0),
  createData('Stevie Nicks', 'Magician', 1, 24, 0),
  createData('James Franco', 'Pipe Fitter', 2, 21, 1),
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
          <TableCell>Role</TableCell>
          <TableCell>Type</TableCell>
          <TableCell>Skill Level</TableCell>
          <TableCell>Rate ($)</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((member) => {
          return (
            <TableRow key={member.id}>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.type} - {member.skillLevel}</TableCell>
              <TableCell>{member.type}</TableCell>
              <TableCell>Class {member.skillLevel}</TableCell>
              <TableCell>${member.rate}/hr</TableCell>
              <TableCell>{member.status === 1 ? 'Confirmed' : 'Pending'}</TableCell>
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
