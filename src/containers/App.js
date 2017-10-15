//infuse Main component with actionCreators
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../redux/actions/actionCreators';
import Main from './Main';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: false
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
