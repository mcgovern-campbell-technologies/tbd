import React from 'react'
import { Row } from 'react-materialize'

function ProfileWrapper ({ children }) {
  return (
    <Row>
      { children }
    </Row>
  )
}

export default ProfileWrapper