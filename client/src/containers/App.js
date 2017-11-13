import React from 'react';

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
import { Login, Callback } from '../components/componentIndex';

/* Import containers */
import { 
  Dashboard,
  LandingPage,
  OnBoardFlow,
  Profile,
} from './containerIndex'

/* Import Auth utilities*/
import AuthService from '../utils/AuthService';
const authService = new AuthService();

/* Create handleAuthentication handler to kick off authService if correct URL hash exists */
const handleAuthentication = (nextState, replace) => {
  return new Promise ((resolve, reject) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      authService.handleAuthentication().then(_ => {
        resolve();
      });
    }
  })
}

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.authService = authService;
  }


  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <div>
          <PropsRoute path="/login" component={Login} {...this.props}/>
          <Route exact path="/" render={(props) => (
            this.props.auth.isAuthenticated? (
              <Redirect to="/dashboard"/>
            ) : (
              <Redirect to="/landingPage"/>
            )
          )}/>
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/landingPage" component={LandingPage} />
          <Route path="/callback" render={(props) => <Callback handleAuthentication={handleAuthentication} {...props} {...this.props} /> }/>
        </div>

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
