import React, { Component } from 'react';
import _ from 'lodash';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  SkillChip,
  SkillListItem,
  ProfileSectionWrapper,
  EditSkillsBox,
} from './../components/componentIndex'



//Actions
import * as actionCreators from '../redux/actions/actionCreators';

class ProfileSkillCard extends Component {

  constructor(props) {
    super(props);
    this.identity = this.props.identity? this.props.identity : 7135;
    this.state = {
      expanded: false,
      editSkillsBoxOpen: false,
    }
  }

  componentWillMount() {
    this.props.getSkills(this.identity);
  }

  openEditSkillsBox() {
    this.setState({ editSkillsBoxOpen: true });
  }

  closeEditSkillsBox() {
    this.setState({ editSkillsBoxOpen: false });
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
        />
        <ProfileSectionWrapper
          title='Skills'
          edit
          expanded={this.state.expanded}
          handleHeaderAction={this.openEditSkillsBox.bind(this)}
        >
          { this.props.skills.list === null ? [] : this.props.skills.list.map((skill) => <SkillListItem key={skill.identity} { ...skill }/>) }
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
