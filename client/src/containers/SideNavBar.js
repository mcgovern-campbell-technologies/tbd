import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import sideNavMenuItem from '../constants/sideNav.json';

const SideNavBar = ({ history }) => (
  <Drawer
    variant="permanent"
  >
    {
      sideNavMenuItem.map(menuItem =>
          <List
            key={menuItem.name}
            onClick={() => {
              history.push('/dashboard/' + menuItem.path)
            }}
          >
            {menuItem.name}
          </List>
      )
    }
  </Drawer>
);

export default SideNavBar
