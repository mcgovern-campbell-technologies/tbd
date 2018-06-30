import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

const TeamPanel = () => (
  <List component="nav" className="flex-2 border-r pt0">
    <Divider />
    <ListItem button className="flex justify-between">
      <p className="mr2">Electrician</p>
      <p className="">2/3</p>
    </ListItem>
    <Divider />
  </List>
)

export default TeamPanel;
