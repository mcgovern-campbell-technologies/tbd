import React from 'react';
import { Route, Link } from 'react-router-dom'
import PropsRoute from '../utils/PropsRoute';

/* Import components */
import Test from '../components/Test';
import OnBoardFlow from './OnBoardFlow';

class Main extends React.Component {
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
          <PropsRoute path="/test" component={Test} {...this.props}/>
          <Route path="/OnBoardFlow" component={OnBoardFlow}/>
        </div>
      </div>
    )
  }
}

Main.contextTypes = { store: React.PropTypes.object };

export default Main;
