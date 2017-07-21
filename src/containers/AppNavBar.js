import React, { Component } from 'react'
import { connect } from 'react-redux'

class AppNavBar extends Component {
  render () {
    return (
      <div>Nav Bar</div>
    )
  }
}

function mapStateToProps (state) {
  return state
}


export default connect(mapStateToProps)(AppNavBar)