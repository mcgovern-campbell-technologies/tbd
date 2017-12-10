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
} from './containerIndex'

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  // componentWillMount() {
  //   // getUser tries to get the user, and if it doesn't get a user, will try addUser
  //   console.log('this.props.auth in Dashboard')
  //   console.log(this.props.auth)
  //   setTimeout(_ => this.props.getUser(this.props.auth.profile.name), 3000)
  //   // if (this.props.auth.profile.name) {
  //     // this.props.getUser(this.props.auth.profile.name);
  //   // }
  // }

  componentDidMount() {
    console.log(this.props);
    const { authService, getUser } = this.props;

    if (authService.isAuthenticated()) {
      getUser(this.props.auth.profile)
    }
  }

  render() {
    const { auth, match } = this.props;
    return auth.profile.name ? (
        <div>
          <Route path={`${match.path}/onBoardFlow`} component={OnBoardFlow}/>
          <Route path={`${match.path}/profile`} component={Profile}/>
          <Route exact path={`${match.path}`} render={() => (<Redirect to={`${match.path}/profile`}/>)}/>
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
