import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../core/actions/actionCreators';
import { isEqual } from 'lodash';

import { 
  ProfileSectionWrapper,
  ExperienceListItem,
  AddExperienceBox,
} from './../components/componentIndex'

const locations = [
  { label: 'Sterling Heights', value: 'Sterling Heights'},
  { label: 'Clinton Township', value: 'Clinton Township'},
  { label: 'Manufacturing Center', value: 'Manufacturing Center'},
  { label: 'Tank Plant', value: 'Tank Plant'},
  { label: 'Warren Plant', value: 'Warren Plant'},
  { label: 'NW', value: 'NW'},
  { label: 'Palmdale', value: 'Palmdale'},
  { label: 'Metro Park', value: 'Metro Park'},
]

const companies = [
  { label: 'kuka', value: 'kuka' }
]

const positions = [
  { 
    label: 'Electrician II', 
    value: 'electrician 2'
  },
  { 
    label: 'Electrician I', 
    value: 'electrician 1'
  },
  { 
    label: 'Electrician Spec', 
    value: 'electrician spec'
  },

]

class ProfileExpirienceCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editBoxOpen: false,
      edit: false,
      sourceNode: {},
      activeProperties: {},
    }
    this.toggleAddExperienceBox = this.toggleAddExperienceBox.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);
    this.handleDeleteExperience = this.handleDeleteExperience.bind(this);
    this.closeEditExperienceBox = this.closeEditExperienceBox.bind(this);
    this.openEditExperienceBox = this.openEditExperienceBox.bind(this);
    this.handleUpdateProperties = this.handleUpdateProperties.bind(this);
  }

  componentWillMount() {
    this.props.getExperiences()
  }

  toggleAddExperienceBox() {

    this.setState({ editBoxOpen: !this.state.editBoxOpen })
  }

  openEditExperienceBox(node) {

    if (node) {
      this.setState({ sourceNode: node,
        activeProperties: { ...node.properites },
        edit: true
      })
    } else {
      this.setState({ 
        activeProperties: { 
          startDate: '',
          endDate: '',
          position: positions[0].value,
          company: companies[0].value,
          locations: locations[0].value 
        }
      })

    }
    
    this.setState({ editBoxOpen: true })
  }

  closeEditExperienceBox() {
    this.setState({ editBoxOpen: false })
  }

  handleAddExperience(exp) {
    this.props.addExperience(exp)
    this.setState({ editBoxOpen: false })
  }

  handleDeleteExperience(id) {
    this.props.deleteExperience(id)
  }

  handleUpdateProperties(name) {
    return event => {
      this.setState({ 
        activeProperties: {
          ...this.state.activeProperties,
          [name]: event.target.value,
        }
      })
    }
  }

  handleEditExperience() {
    const payload = { properties: this.state.activeProperties, identity: this.state.sourceNode.identity}

    if (isEqual(payload.properties, this.state.sourceNode.properties)) {
      this.props.editExperience(payload)
    }
  }

  render() {
    return (
      <div>
        <AddExperienceBox 
          open={this.state.editBoxOpen}
          edit={true}
          handleUpdateProperties={this.handleUpdateProperties}
          toggleAddExperienceBox={this.closeEditExperienceBox}
          handleAddExperience={this.handleAddExperience}
          handleDeleteExperience={this.handleDeleteExperience}
          properties={this.state.activeProperties}
          positions={positions}
          companies={companies}
          locations={locations}
        />
        <ProfileSectionWrapper
          title={'Experience'}
          handleHeaderAction={() => this.openEditExperienceBox()}
        >
          { 
            this.props.list? this.props.list.map(exp => 
              <ExperienceListItem 
                key={exp.identity}
                handleDeleteExperience={this.handleDeleteExperience}
                handleOpenEditBox={this.openEditExperienceBox}
                node={exp}
              />
            ) : null
          }
        </ProfileSectionWrapper>
      </div>
    )
  }
}

function mapStateToProps({ experiences, user }) {
  return { 
    ...experiences,
    user,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileExpirienceCard)
