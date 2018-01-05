import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Menu, { MenuItem }from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography'
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Icon from 'material-ui-icons/MoreVert';
import { Link } from 'react-router';
import { withStyles } from 'material-ui/styles';

const Login = (props) =>  {
  return (
    <Button
      onClick={props.login}
    >
      Login
    </Button>
  );
}

const Logged = (props) => {
  console.log('Logged should show')
  return (
    <Menu
      open={false} //TODO: Need to change this onClick.
      iconButtonElement={
        <IconButton>
          <Icon/>
        </IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" onClick  ={() => {
        props.logoutSuccess();
        props.logout();
      }}/>
    </Menu>
  )
};

class AppNavBar extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
      open: false,
    };
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClick(event) {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleClose() {
    this.setState({ open: false });
  };

  render() {
    return (
      <AppBar
        style={this.props.style}
      >
        <Toolbar>
          <Typography type="title">
            TBD
          </Typography>
          {
            this.props.isAuthenticated() ? (
              <Logged
                logoutSuccess={this.props.logoutSuccess}
                logout={this.props.logout}
              />
            ) : (
              <Login
                login={this.props.login}
              />
            )
          }
        </Toolbar>
      </AppBar>
    )
  }
}
        // iconElementRight={this.props.isAuthenticated() ? (
        //     <Logged
        //       logoutSuccess={this.props.logoutSuccess}
        //       logout={this.props.logout}
        //     />
        //   ) : (
        //     <Login
        //       login={this.props.login}
        //     />
        //   )
        // }

export default AppNavBar
