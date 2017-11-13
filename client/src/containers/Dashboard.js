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
  componentWillMount() {
    console.log('in componentDidMount')
    if(this.props.skills.length === 0) {
      this.props.getSkills();
    }
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <Route path={`${match.path}/onBoardFlow`} component={OnBoardFlow}/>
        <Route path={`${match.path}/profile`} component={Profile}/>
        <Route exact path={`${match.path}`} render={() => (<Redirect to={`${match.path}/profile`}/>)}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}
 
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);