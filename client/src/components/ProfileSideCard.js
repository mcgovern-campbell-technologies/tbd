import React from 'react';

import fbLogo from '../assets/fbLogo.png';
import lnLogo from '../assets/lnLogo.png';

function ProfileSideCard(props) {
  const { name, email, picture } = props;
  console.log(name, picture)
  return (
    <div className="col s7">
      <img className="profile-image"src={picture}/>
      <p className="font-size-xl font-bold margin-bottom-none">{name}</p>
      <p className="font-size-m margin-top-none">Machinist</p>

      <p>
              <span>About Rob</span>

              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum </p>

      </p>

      <div className="divider"></div>
      <div>
        <img className="social-media" src={fbLogo}/>
        <img className="social-media" src={lnLogo}/>
      </div>
    </div>
  );
}

export default ProfileSideCard;