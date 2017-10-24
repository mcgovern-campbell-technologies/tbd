import React from 'react';

/* Import Router Dependencies */
import { Route, Link } from 'react-router-dom'
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

/* Import containers */
import { OnBoardFlow, LandingPage } from './containerIndex'

/* Import Auth utilities*/
import AuthService from '../utils/AuthService';


class App extends React.Component {
  constructor() {
    super()
    //instantiate the authService from class
    this.authService = new AuthService();
  }

  componentWillMount() {
    // Add callback for lock's `authenticated` event
    this.authService.lock.on('authenticated', (authResult) => {
      this.authService.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) { return this.props.loginError(error); }
        AuthService.setToken(authResult.idToken); // static method
        AuthService.setProfile(profile); // static method
        this.props.loginSuccess(profile);
        return this.props.history.push({ pathname: '/' });
      });
    });
    // Add callback for lock's `authorization_error` event
    this.authService.lock.on('authorization_error', (error) => {
      this.props.loginError(error);
      return this.props.history.push({ pathname: '/' });
    });
  }

  render() {
    console.log('this.props from App')
    console.log(this.props)
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/test">Login</Link></li>
          </ul>
        </nav>
        <div>
          <Route exact path="/" component={LandingPage} />
          <PropsRoute path="/test" component={Test} authService={this.authService} {...this.props}/>
          <Route path="/OnBoardFlow" component={OnBoardFlow}/>
        </div>

      </div>
    )
  }
}

App.contextTypes = { store: PropTypes.object };

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

