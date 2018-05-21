import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Menu, { MenuItem }from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui-icons/Menu';
import Notifications from 'material-ui-icons/Notifications';

import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MoreVertIcon from 'material-ui-icons/MoreVert';
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

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

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
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            
            <Typography type="title" color="inherit" className={classes.flex}>
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
      </div>
    )
  }
}
      `<div className={classes.root}>
              <AppBar
                style={this.props.style}
              >
                <Toolbar>
                  <Typography type="title" className={classes.flex}>
                    TBD
                  </Typography>
      
                  {/*
                    this.props.isAuthenticated() ? (
                      <Logged
                        logoutSuccess={this.props.logoutSuccess}
                        logout={this.props.logout}
                      />
                    ) : (
                      <Login
                        login={this.props.login}
                      />
                    )*/
                  }
      
                 </Toolbar>
              </AppBar>
            </div>`




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

export default withStyles(styles)(AppNavBar)
