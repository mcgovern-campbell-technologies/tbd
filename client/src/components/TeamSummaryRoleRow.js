import React from 'react';

import { TableCell, TableRow } from 'material-ui/Table';

export default function TeamSummaryRoleRow(props) {
  const { id, type, skillLevel, weekDays, time, requested, filled } = props
  return (
    <TableRow key={id}>
      <TableCell>{type} - {skillLevel}</TableCell>
      <TableCell>{skillLevel}</TableCell>
      <TableCell>{weekDays}</TableCell>
      <TableCell>{time}</TableCell>
      <TableCell>{requested}</TableCell>
      <TableCell>{filled}</TableCell>
    </TableRow>
  );
}