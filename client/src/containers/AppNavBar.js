import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router'

const Login = (props) =>  {
  return (
    <FlatButton 
      label="Login" 
      onClick={props.login}
    />
  );
}

const Logged = (props) => (
  <IconMenu
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
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
        title="TBD"
        color="grey"
        iconElementRight={this.props.isAuthenticated() ? (
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
      />
    )
  }
}

export default AppNavBar