import React from 'react'

import { Col } from 'react-materialize'

function ProfileCardWrapper ({ children }) {
  return (
    <Col m={3}>
      { children }
    </Col>
  )
}

export default ProfileCardWrapper