import React, { Component } from 'react';
import classnames from 'classnames';
import Drawer from 'material-ui/Drawer';
import { MenuItem } from 'material-ui/Menu';
import AppBar from 'material-ui/';
import { withStyles } from 'material-ui/styles';

console.log(classnames);

const drawerWidth = 1000;
const styles = () => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
  }
})


class SideNavBar extends Component {
  render() {
    const { classes } = this.props;
    console.log(classes)
    return (
      <Drawer
        className={{
          paper: classnames(classes.drawerPaper)
        }
        }
        open={false}
      >
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
      </Drawer>
    )
  }
}

export default withStyles(styles)(SideNavBar)