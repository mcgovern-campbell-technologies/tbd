import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'

import { ProfileSnapShot, ProfileCard } from './index'
import { ProfilePage } from '../components/index'

function Profile ({ match }) {
  return (
    <ProfilePage>
      <ProfileCard />
      <Route path={match.url} component={ProfileSnapShot}/>
    </ProfilePage>
  )
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(Profile)

