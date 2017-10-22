import React from 'react';
import { Route, Link } from 'react-router-dom'
import PropsRoute from '../utils/PropsRoute';
import PropTypes from 'prop-types';

/* Import components */
import Test from '../components/Test';
import OnBoardFlow from './OnBoardFlow';
import AuthService from '../utils/AuthService';

class Main extends React.Component {
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
    console.log('this.props from Main')
    console.log(this.props)
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/test">Test</Link></li>
          </ul>
        </nav>
        <div>
          <Route exact path="/" component={() => <p>'hello world'</p>} {...this.props}/>
          <PropsRoute path="/test" component={Test} authService={this.authService} {...this.props}/>
          <Route path="/OnBoardFlow" component={OnBoardFlow}/>
        </div>
      </div>
    )
  }
}

Main.contextTypes = { store: PropTypes.object };

export default Main;
