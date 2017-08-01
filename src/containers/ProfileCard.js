import React from 'react'

import { 
  ProfileCardContactLinks,
  ProfileCardPicture,
  ProfileCardSkillScore, 
  ProfileCardWrapper,
} from '../components/index'

function ProfileCard () {
  return (
    <ProfileCardWrapper>
      <ProfileCardPicture /> 
      <ProfileCardSkillScore /> 
      <ProfileCardContactLinks />
    </ProfileCardWrapper>
  )
}

export default ProfileCard