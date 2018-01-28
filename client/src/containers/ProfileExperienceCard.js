import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../redux/actions/actionCreators';

import { 
  ProfileSectionWrapper,
  ExperienceListItem,
  AddExperienceBox,
} from './../components/componentIndex'

class ProfileExpirienceCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addBoxOpen: false,
    }
    this.toggleAddExperienceBox = this.toggleAddExperienceBox.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);
  }

  componentWillMount() {
    this.props.getExperiences()
  }

  toggleAddExperienceBox() {
    this.setState({ addBoxOpen: !this.state.addBoxOpen })
  }

  handleAddExperience(exp) {
    this.props.addExperience(exp)
    this.setState({ addBoxOpen: false })
  }

  render() {
    return (
      <div>
        <AddExperienceBox 
          open={this.state.addBoxOpen}
          toggleAddExperienceBox={this.toggleAddExperienceBox}
          handleAddExperience={this.handleAddExperience}
        />
        <ProfileSectionWrapper
          title={'Experience'}
          handleHeaderAction={this.toggleAddExperienceBox}
        >
          { 
            this.props.list? this.props.list.map(exp => 
              <ExperienceListItem 
                key={exp.identity}
                { ...exp }
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
