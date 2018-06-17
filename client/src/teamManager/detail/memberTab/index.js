import React from 'react';
import { withRouter } from 'react-router'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

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

const MemberTab = ({ history, location }) => (
  <div>
    <Table className="mb6">
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
    <Button
      variant="fab"
      aria-label="add"
      className="absolute bottom-1 right-1"
      onClick={() => history.push(`${location.pathname}/addmember`)}
    >
      <AddIcon />
    </Button>
  </div>
)

export default withRouter(MemberTab);
