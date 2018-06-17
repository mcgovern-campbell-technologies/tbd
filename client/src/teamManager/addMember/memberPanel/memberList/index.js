import React from 'react';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';


const MemberList = () => (
  <div className="pt2 pb2 h-100 flex flex-column">
    <h5>Members</h5>
    <List className="h-100 overflow-y-auto pa1">
      <ListItem dense button className="flex items-center w-100 pa2">
        <Icon className="mr2 fs-s">fiber_manual_record</Icon>
        <p className="mr4 fs-s">John Smith</p>
        <ListItemSecondaryAction>
          <Checkbox checked={true} />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
    <Divider />
    <p className="text-right mt3">1/23 Filled</p>
  </div>
)

export default MemberList;
