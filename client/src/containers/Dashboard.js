import React, { Component } from 'react';

/* Import Router Dependencies */
import { Route, Link, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'

/* Prop Verification */
import PropsRoute from '../utils/PropsRoute';
import PropTypes from 'prop-types';

/* Import Redux Utilities */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionCreators';

/* Import components */
import { Test } from '../components/componentIndex';
import { Callback } from '../components/componentIndex';

/* Import containers */
import {
  LandingPage,
  OnBoardFlow,
  Profile,
  SideNavBar,
} from './containerIndex'

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { authService, getUser } = this.props;

    if (authService.isAuthenticated()) {
      getUser(this.props.auth.profile)
    }
  }

  render() {
    const { auth, match, user } = this.props;
    return user ? (
        <div>
          <div className='fl w-20 pa2'>
            <SideNavBar />
          </div>
          <div className='fl w-80 pa2'>
            <Route path={`${match.path}/onBoardFlow`} component={OnBoardFlow}/>
            <Route path={`${match.path}/profile`} component={Profile}/>
            <Route exact path={`${match.path}`} render={() => (<Redirect to={`${match.path}/profile`}/>)}/>
          </div>
        </div>
      ) : (
        <p>loading...</p>
      );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
