import React from 'react';

import fbLogo from '../assets/fbLogo.png';
import lnLogo from '../assets/lnLogo.png';

function ProfileSideCard(props) {
  const { name, email, picture } = props;
  console.log(name, picture)
  return (
    <div className="col s3">
      <img className="profile-image"src={picture}/>
      <p className="font-size-l font-bold margin-bottom-none">{name}</p>
      <p className="font-size-m margin-top-none">Machinist</p>
      <button className="waves-effect waves-light btn center margin-bottom"> Book </button>

      <div className="divider"></div>
      <div>
        <img className="social-media" src={fbLogo}/>
        <img className="social-media" src={lnLogo}/>
      </div>
    </div>
  );
}

export default ProfileSideCard;