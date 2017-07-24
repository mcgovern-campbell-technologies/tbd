import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'

import { ProfileSnapShot } from './'

function Profile ({ match }) {
  return (
    <div> 
      <p>Profile</p>
      <Route path={match.url} component={ProfileSnapShot}/>
    </div>
  )
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(Profile)

