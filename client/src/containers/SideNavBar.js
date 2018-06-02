import React from 'react';
import Drawer from 'material-ui/Drawer';
import { MenuItem } from 'material-ui/Menu';
import { Link } from 'react-router-dom';

import sideNavMenuItem from '../constants/sideNav.json';

const SideNavBar = ({ history }) => (
  <Drawer
    type="permanent"
  >
    {
      sideNavMenuItem.map(menuItem =>
          <MenuItem
            key={menuItem.name}
            onClick={() => {
              history.push('/dashboard/' + menuItem.path)
            }}
          >
            {menuItem.name}
          </MenuItem>
      )
    }
  </Drawer>
);

export default SideNavBar
