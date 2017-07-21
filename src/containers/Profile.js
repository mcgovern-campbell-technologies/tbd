import React, { Component } from 'react'
import { connect } from 'react-redux'

function Profile (props) {
  console.log('profile', props)
  return (
    <div> 
      <p>Profile</p>
      { props.children }
    </div>
  )
}

function mapStateToProps ({ children, value}) {
  return {
    children,
    value,
  }
}

export default connect(mapStateToProps)(Profile)