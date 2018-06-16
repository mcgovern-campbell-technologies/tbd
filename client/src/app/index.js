import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import PropsRoute from '../core/utils/PropsRoute';
import { connect } from 'react-redux';
import * as actionCreators from '../core/actions/actionCreators';
import { Login, Callback, DialogRoot } from '../components/componentIndex';
import {
  Dashboard,
  LandingPage,
} from '../containers/index'
import TopNav from './topNav';
import SideNav from './sideNav';
import AuthService from '../core/utils/AuthService';
import { routes } from '../routes';

const authService = new AuthService();

class App extends React.Component {

  constructor(props) {
    super(props);
    this.authService = authService;
  }

  render() {
    return (
      <div>
        <TopNav
          isAuthenticated={this.props.isAuthenticated}
          {...this.authService}
          logoutSuccess={this.props.logoutSuccess}
          location={this.props.location}
        />
        <SideNav />
        <div className='pt6 pl7 pr4'>
          { routes }
        </div>
        <DialogRoot />
      </div>
    )
  }
}

App.contextTypes = { store: PropTypes.object };

const mapStateToProps = (state) => {
  //I'm just passing the entire state as props here just to have extra visibity on everything available.
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
