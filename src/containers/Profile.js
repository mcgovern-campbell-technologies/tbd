import React from 'react'
import { connect } from 'react-redux'

function Profile (state) {
  console.log('Profile', state)
  return (
    <div> 
      <p>Profile</p>
      { }
    </div>
  )
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(Profile)

// import React, { Component } from 'react'
// import AppNavBar from './AppNavBar'
// import { connect } from 'react-redux'

// function App({ children }){
//   console.log('App, children', children)
//   return (
//     <div>
//       <AppNavBar />
//       { children }
//     </div>
//   )
// }

// function mapStateToProps (state) {
//   return state
// }

// export default connect(mapStateToProps)(App)