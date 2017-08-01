import React from 'react'

import { Col } from 'react-materialize'

function ProfileRoutesWrapper ({ children }) {
  return (
    <Col l={9} offset='l1'>
      { children }
    </Col>
  )
}

export default ProfileRoutesWrapper