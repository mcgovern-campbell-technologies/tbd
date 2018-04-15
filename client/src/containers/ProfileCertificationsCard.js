import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../core/actions/actionCreators';

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
      sourceNode: {},
      activeProperties: {},

    }

    this.deleteCertification = this.deleteCertification.bind(this);
    this.openEditCertificationBox = this.openEditCertificationBox.bind(this);
    this.closeEditCertificationBox = this.closeEditCertificationBox.bind(this);
    this.handleEditCertificationFields = this.handleEditCertificationFields.bind(this);
    this.addCertification = this.addCertification.bind(this);
    this.handleUpdateCertification = this.handleUpdateCertification.bind(this)
  }

  handleEditCertificationFields(name) {
    return (event) => {
      const value = event.target ? event.target.value : event;

      this.setState({
        activeProperties: {
          ...this.state.activeProperties,
          [name]: value
        }
      })
    }
  }

  addCertification() {
    this.props.addCertification(this.state.activeProperties);
  }

  deleteCertification(id) {
    this.props.deleteCertification(id)
  }

  openEditCertificationBox(node) {

    if (node) {

      this.setState({ sourceNode: node })
      this.setState({ activeProperties: { ...node.properties }})
      this.setState({ edit: true })

    } else {

      this.setState({ activeProperties: { 
        name: '',
        institution: '',
        date: '',
      }})

    }
    this.setState({ editCertificationBoxOpen: true })
  }

  handleUpdateCertification() {

    const payload = { properties: this.state.activeProperties, identity: this.state.sourceNode.identity}

    if (!_.isEqual(payload.properties, this.state.sourceNode.properties)) {

      // console.log(payload.properties)
      this.props.editCertification(payload)
    } 
  }

  closeEditCertificationBox() {

    this.setState({ 
      editCertificationBoxOpen: false,
      sourceNode: {},
      sourceProperties: {},
      activeProperties: {},
      edit: false,
    })
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
          properties={ this.state.activeProperties }
          closeEditCertificationBox={ this.closeEditCertificationBox }
          handleAddCertification={this.addCertification}
          edit={ this.state.edit }
          handleEditCertificationFields={this.handleEditCertificationFields}
          handleDeleteCertification={this.deleteCertification}
          handleUpdateCertification={this.handleUpdateCertification}
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
