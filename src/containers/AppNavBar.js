import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar, NavItem, Icon } from 'react-materialize'


class AppNavBar extends Component {
  render () {
    return (
      <Navbar brand='luber' right className='grey lighten-1'>
        <NavItem waves='dark'><Icon>search</Icon></NavItem>
      </Navbar>
    )
  }
}

function mapStateToProps (state) {
  return state
}


export default connect(mapStateToProps)(AppNavBar)