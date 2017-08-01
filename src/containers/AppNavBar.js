import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar, NavItem, Icon, Row } from 'react-materialize'

import { NavBar, AppLinks, SearchField } from '../components/index'


function AppNavBar () {

  const links = [
    { pathname: '/profile' }
  ]
  return (
    <NavBar>
      {links.map(to => (<AppLinks key={to.pathname} to={to} />))}
      {/*<SearchField />*/}
    </NavBar>
  )
}

function mapStateToProps (state) {
  return state
}

/*
<Navbar brand='luber' right className='grey lighten-1'>
  <NavItem waves='dark'><Icon>search</Icon></NavItem>
</Navbar>
*/


export default connect(mapStateToProps)(AppNavBar)