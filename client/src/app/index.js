import React from 'react';
import { withRouter } from 'react-router'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import * as actionCreators from '../core/actions/actionCreators';
import { Login, Callback, DialogRoot } from '../components/componentIndex';
import TopNav from './topNav';
import SideNav from './sideNav';
import AuthService from '../core/utils/AuthService';
import { routes } from '../routes';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = document.getElementById('jss-insertion-point');

const authService = new AuthService();

class App extends React.Component {

  constructor(props) {
    super(props);
    this.authService = authService;
  }

  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <div>
          <TopNav
            isAuthenticated={this.props.isAuthenticated}
            {...this.authService}
            logoutSuccess={this.props.logoutSuccess}
            location={this.props.location}
          />
          <SideNav />
          <div className='pt6 pl6 pr5'>
            { routes }
          </div>
          <DialogRoot />
        </div>
      </JssProvider>
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
