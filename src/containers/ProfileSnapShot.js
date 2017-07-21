import React from 'react'
import { connect } from 'react-redux'

function ProfileSnapShot (state) {
  return (
    <p>ProfileSnapShot</p>
  )
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(ProfileSnapShot)