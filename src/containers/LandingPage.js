import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1 className="landing-header brand-logo">TBD</h1>
        <div>
          <h2 className="catchphrase">Discover new opportunities for your skillset</h2>
        </div>
        <div className="center">
          <span>
            <button className="waves-effect waves-light btn route-button">
              <Link to="/OnBoardFlow">employer </Link>
            </button>
            <button className="waves-effect waves-light btn route-button">
              <Link to="/OnBoardFlow">job seeker </Link>
            </button>
          </span>
        </div>
      </div>
      
    )
  }
}

export default LandingPage