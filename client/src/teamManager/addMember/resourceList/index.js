import React from 'react';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';


const ResourceList = () => (
  <div>
    <List>
      <Card className="pa0">
        <ListItem dense button className="flex pa3 justify-between">
          <Avatar className="mr3">R</Avatar>
          <div>
            <h4 className="ma0">Rob Johnson</h4>
            <p className="fs-xs">Electrician, Class 2</p>
          </div>
          <p className="ml-auto mr5">$22.00/hr</p>
          <ListItemSecondaryAction>
            <IconButton>
              <Icon>add_circle</Icon>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </Card>
    </List>
  </div>
)

export default ResourceList;
