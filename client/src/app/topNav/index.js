import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ModeEdit from '@material-ui/icons/Menu';
import Notifications from '@material-ui/icons/Notifications';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const Login = (props) =>  {
  return (
    <Button
      onClick={props.login}
    >
      Login
    </Button>
  );
}


const Logged = (props) => (
  <Button 
    onClick={() => {
        props.logoutSuccess();
        props.logout();
      }
    }
  >
    Logout
  </Button>
);

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
    const { classes } = this.props;
    return (
      <AppBar position="absolute" className="z-9999">
        <Toolbar>
          <Typography type="title" color="inherit" className="flex-grow-1">
            Title
          </Typography>
          <TextField/>
          <IconButton>
            <ModeEdit />
          </IconButton>
          <IconButton>
            <Notifications />
          </IconButton>
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

export default AppNavBar;
