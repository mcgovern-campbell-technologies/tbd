import React from 'react';

import fbLogo from '../assets/fbLogo.png';
import lnLogo from '../assets/lnLogo.png';

function ProfileSideCard(props) {
  const { name, email, picture, blurb } = props;

  return (
    <div className="col s7">
      <img className="profile-image" src={picture}/>
      <p className="font-size-xl font-bold margin-bottom-none">{name}</p>
      <p className="font-size-m margin-top-none">Machinist</p>

      <div>
        <span>About {name}</span>

        <p>{blurb}</p>

      </div>

      <div className="divider"></div>
      <div>
        <img className="social-media" src={fbLogo}/>
        <img className="social-media" src={lnLogo}/>
      </div>
    </div>
  );
}

export default ProfileSideCard;
