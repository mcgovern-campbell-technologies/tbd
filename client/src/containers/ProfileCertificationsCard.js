import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  ProfileSectionWrapper,
  ProfileSectionListItem,
} from './../components/componentIndex'

class ProfileCertificationsCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editCertificationBoxOpen: false,

    }
    this.openEditCertificationBox = this.openEditCertificationBox.bind(this);
    this.closeEditCertificationBox = this.closeEditCertificationBox.bind(this);
  }

  openEditCertificationBox(node) {
    this.setState({ editCertificationBoxOpen: true })
  }

  closeEditCertificationBox() {
    this.setState({ editCertificationBoxOpen: false })
  }
  render() {
    return (
      <div>
        <ProfileSectionWrapper
          title='Certifications'
          handleHeaderAction={() => console.log('hi')}
          childrenShownOnUnexpanded={2}
        >
          {[
            <ProfileSectionListItem
              key="this key is just to prevent a warning in console - feel free to change/remove" 
              openEditBox={this.openEditCertificationBox}
            />
          ]}
        </ProfileSectionWrapper>
      </div>
    )
  }
}

export default ProfileCertificationsCard;
