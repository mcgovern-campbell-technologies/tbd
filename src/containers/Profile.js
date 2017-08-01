import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'

import { ProfileSnapShot, ProfileCard } from './index'
import { ProfileWrapper, ProfileRoutesWrapper } from '../components/index'

function Profile ({ match }) {
  return (
    <ProfileWrapper>
      <ProfileCard />
      <ProfileRoutesWrapper>
        <Route path={match.url} component={ProfileSnapShot}/>
      </ProfileRoutesWrapper>
    </ProfileWrapper>
  )
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(Profile)

