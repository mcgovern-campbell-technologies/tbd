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
      edit: false,
      activeCertification: {
        properties: {
          name: '',
          institution: '',
          date: '',
        }
      },
    }

    this.openEditCertificationBox = this.openEditCertificationBox.bind(this);
    this.closeEditCertificationBox = this.closeEditCertificationBox.bind(this);
    this.handleEditCertificationFields = this.handleEditCertificationFields.bind(this);
    this.addCertification = this.addCertification.bind(this);
  }

  handleEditCertificationFields(name) {
    return (event) => {
      const value = event.target ? event.target.value : event;
      this.setState({
        activeCertification: {
          ...this.state.activeCertification,
          properties: { ...this.state.activeCertification.properties, [name]: value}
        }
      })
    }
  }

  addCertification() {
    console.log('hitting addCertification')
    this.props.addCertification(this.state.activeCertification.properties);
  }

  openEditCertificationBox(node) {
    if (node) {
      this.setState({ activeCertification: node })
      this.setState({ edit: true })
    }
    this.setState({ editCertificationBoxOpen: true })
  }

  closeEditCertificationBox() {
    this.setState({ editCertificationBoxOpen: false })
    //I know this is the dirtiest thing youve ever seen
    setTimeout(() => this.setState({ edit: false }), 100)
  }

  componentWillMount() {
    this.props.getCertifications()
  }

  render() {
    return (
      <div>
        <ProfileSectionWrapper
          title='Certifications'
          handleHeaderAction={() => this.openEditCertificationBox()}
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
          handleAddCertification={this.addCertification}
          edit={ this.state.edit }
          handleEditCertificationFields={this.handleEditCertificationFields}
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
