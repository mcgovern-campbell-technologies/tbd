import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconMenu from 'material-ui/Menu';
import { MenuItem }from 'material-ui/Menu';
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

const Logged = (props) => (
  <IconMenu
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
  </IconMenu>
);

class AppNavBar extends Component {

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