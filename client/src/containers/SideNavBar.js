import React from 'react';
import Drawer from 'material-ui/Drawer';
import { MenuItem } from 'material-ui/Menu';

import sideNavMenuItem from '../constants/sideNav.json';

const SideNavBar = () => (
  <Drawer
    type="permanent"
  >
    {
      sideNavMenuItem.map(menuItem =>
        <MenuItem>{menuItem.name}</MenuItem>
      )
    }
  </Drawer>
);

export default SideNavBar
