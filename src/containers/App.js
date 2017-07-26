import React, { Component } from 'react'
import AppNavBar from './AppNavBar'
import { Route } from 'react-router'
import { connect } from 'react-redux'

import { Profile } from './index'

import ReactRouterTest from '../components/react-router-test'

function App({ match }){
  return (
    <div>
      <AppNavBar />
      <Route path={match.url} component={Profile} />
    </div>
  )
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(App)
