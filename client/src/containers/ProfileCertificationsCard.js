import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../redux/actions/actionCreators';

import { 
  ProfileSectionWrapper,
  ProfileSectionListItem,
  EditCertificationBox,
} from './../components/componentIndex'

class ProfileCertificationsCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editCertificationBoxOpen: false,
      activeCertification: {
        name: '',
        location: ' ',
        institution: '',
      },
    }

    this.openEditCertificationBox = this.openEditCertificationBox.bind(this);
    this.closeEditCertificationBox = this.closeEditCertificationBox.bind(this);
  }

  openEditCertificationBox(node) {
    console.log(node)
    this.setState({ activeCertification: node })
    this.setState({ editCertificationBoxOpen: true })
  }

  closeEditCertificationBox() {
    this.setState({ editCertificationBoxOpen: false })
  }

  componentWillMount() {
    this.props.getCertifications()
  }

  render() {
    return (
      <div>
        <ProfileSectionWrapper
          title='Certifications'
          handleHeaderAction={() => console.log('hi')}
          childrenShownOnUnexpanded={2}
        >
          {
            this.props.list.map(node => 
              <ProfileSectionListItem
                key={node.identity}
                node={node}
                openEditBox={this.openEditCertificationBox}
              />)
          }
        </ProfileSectionWrapper>
        <EditCertificationBox 
          open={ this.state.editCertificationBoxOpen }
          node={ this.state.activeCertification }
          closeEditCertificationBox={ this.closeEditCertificationBox }
        />
      </div>
    )
  }
}

function mapStateToProps({ certifications }) {
  return certifications;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCertificationsCard);
