import React from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';

import sideNavMenuItem from '../../core/constants/sideNav.json';

const SideNav = () => (
  <Drawer variant="permanent">
    <div className="pt5" />
    {
      sideNavMenuItem.map(menuItem =>
          <List key={menuItem.name} component="nav">
            <NavLink to={'/dashboard/' + menuItem.path}>
              <ListItem button>
                <Icon>{menuItem.icon}</Icon>
                {/*<ListItemText primary={menuItem.name} />*/}
              </ListItem>
            </NavLink>
          </List>
      )
    }
  </Drawer>
);

export default SideNav
