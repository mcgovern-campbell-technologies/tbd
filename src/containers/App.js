import React, { Component } from 'react'
import AppNavBar from './AppNavBar'
import { connect } from 'react-redux'

import ReactRouterTest from '../components/react-router-test'

function App({ children }){
  console.log('App, children', children)
  return (
    <div>
      <AppNavBar />
      { children }
    </div>
  )
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(App)
