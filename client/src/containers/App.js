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
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    authService.handleAuthentication();
  }
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
          <Route exact path="/" component={LandingPage} />
          <PropsRoute path="/login" component={Login} {...this.props}/>
          <Route path="/dashboard" render={() => (
            this.props.auth.isAuthenticated? (
              <Dashboard />
            ) : (
              <Redirect to="/landingPage"/>
            )
          )}/>
          <Route exact path="/landingPage" component={LandingPage} />
          <Route path="/OnBoardFlow" component={OnBoardFlow}/>
          <Route path="/Profile" component={Profile}/>
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} {...this.props} />
          }}/>

        </div>

      </div>
    )
  }
}

App.contextTypes = { store: PropTypes.object };

const mapStateToProps = (state) => {
  console.log('state');
  console.log(state)
  return {
    auth: state.authService
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
