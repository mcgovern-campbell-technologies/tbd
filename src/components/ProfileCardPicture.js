import React from 'react'

import { MediaBox } from 'react-materialize'

function ProfileCardPicture (props) {
  console.log(props)
  const imgSrc = 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'
  return (
    <div>
      <img src={imgSrc} width={220}/>
      <h5>Rob Johnson</h5>
    </div>
  )
}

export default ProfileCardPicture