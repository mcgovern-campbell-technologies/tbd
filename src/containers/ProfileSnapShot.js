import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'

import { OneWeekOut } from './index'
import { ProfileSnapShotWrapper } from '../components/index'

function ProfileSnapShot (state) {
  return (
    <div>
      <OneWeekOut/>
    </div>
  )
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(ProfileSnapShot)