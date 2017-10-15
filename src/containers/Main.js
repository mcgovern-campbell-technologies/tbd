import React from 'react';
import { Route, Link } from 'react-router-dom'

/* Import components */
import Test from '../components/Test';

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
          <Route path="/test" component={Test} {...this.props}/>
        </div>
      </div>
    )
  }
}

export default Main;
