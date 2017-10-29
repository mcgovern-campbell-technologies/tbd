import React from 'react';
import _ from 'lodash';

function ProfileSkills(props) {
  const { given_name, skills } = props;
  return (
    <div>
      <h5>Skills</h5>
      <ul>
        {
          _.map(skills, skill => <li key={skill.name}>{skill.name}</li>)
        }
      </ul>
    </div>
  )
}

export default ProfileSkills;