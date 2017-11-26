import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class SideNavBar extends Component {
  render() {
    return (
      <Drawer
        open={true}
        zDepth={0}
      >
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
      </Drawer>
    )
  }
}

export default SideNavBar