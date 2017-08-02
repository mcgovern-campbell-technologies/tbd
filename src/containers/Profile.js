import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import { Row } from 'react-materialize'

import { ProfileSnapShot, ProfileCard } from './index'

function Profile ({ match }) {
  return (
    <Row>
      <ProfileCard />
      <Route path={match.url} component={ProfileSnapShot}/>
    </Row>
  )
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(Profile)


