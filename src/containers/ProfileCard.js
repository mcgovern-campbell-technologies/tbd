import React from 'react'

import { Col } from 'react-materialize'

import { 
  ProfileCardContactLinks,
  ProfileCardPicture,
  ProfileCardSkillScore, 
} from '../components/index'

function ProfileCard () {
  return (
    <Col l={2} style={{margin: 5}}>
      <ProfileCardPicture /> 
      <ProfileCardSkillScore /> 
      <ProfileCardContactLinks />
    </Col>
  )
}

export default ProfileCard
