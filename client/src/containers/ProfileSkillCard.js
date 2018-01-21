import React, { Component } from 'react';
import _ from 'lodash';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  SkillListItem,
  ProfileSectionWrapper,
  EditSkillsBox,
} from './../components/componentIndex'



//Actions
import * as actionCreators from '../redux/actions/actionCreators';

class ProfileSkillCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      editSkillsBoxOpen: false,
    }
    this.handleDeleteSkill = this.handleDeleteSkill.bind(this);
  }

  componentWillMount() {
    if(this.props.user.identity) {
      this.props.getSkills(this.props.user.identity);
    }
  }

  openEditSkillsBox() {
    this.setState({ editSkillsBoxOpen: true });
  }

  closeEditSkillsBox() {
    this.setState({ editSkillsBoxOpen: false });
  }

  handleDeleteSkill(identity) {
    console.log('ProfileSkillCard handle delete', identity)
    this.props.deleteSkill(identity);
  }

  render() {

    return (
      <div>

        <EditSkillsBox
          open={this.state.editSkillsBoxOpen}
          identity={this.identity}
          closeAddSkillBox={this.closeEditSkillsBox.bind(this)}
          addSkill={this.props.addSkill}
          skills={this.props.skills.list}
          handleDeleteSkill={this.handleDeleteSkill}
        />
        <ProfileSectionWrapper
          title='Skills'
          edit
          expanded={this.state.expanded}
          childrenShownOnUnexpanded={3}
          handleHeaderAction={this.openEditSkillsBox.bind(this)}
        > 
          { this.props.skills.list.map((skill) => <SkillListItem key={skill.identity} { ...skill }/>) }
        </ProfileSectionWrapper>
      </div>
    )
  }
}

function mapStateToProps({ skills, user }) {
  return { skills, user };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSkillCard);
