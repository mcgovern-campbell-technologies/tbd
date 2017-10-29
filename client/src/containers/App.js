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
import { Callback } from '../components/componentIndex';

/* Import containers */
import { OnBoardFlow, LandingPage, Profile } from './containerIndex'

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
  constructor() {
    super()
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
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
