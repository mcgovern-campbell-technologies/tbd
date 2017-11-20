import React from 'react';
import _ from 'lodash';

function ProfileCertifications(props) {
  const { certifications } = props;
  return (
    <div>
      <h5>Certifications</h5>
      <ul>
        {
          _.map(certifications, (cert, k) => <li key={k}>{cert.name}</li>)
        }
      </ul>
    </div>
  )
}

export default ProfileCertifications;
