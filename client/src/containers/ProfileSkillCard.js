import React, { Component } from 'react';
import _ from 'lodash';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  SkillChip,
  SkillListItem,
  ProfileSkillWrapper,
  AddSkillBox,
} from './../components/componentIndex'



//Actions
import * as actionCreators from '../redux/actions/actionCreators';

class ProfileSkillCard extends Component {

  constructor(props) {
    super(props);
    this.identity = this.props.identity? this.props.identity : 7135;
    this.state = {
      expanded: false,
      skillBoxOpen: false,
    }
  }

  componentWillMount() {
    this.props.getSkills(this.identity);
  }

  componentDidMount() {
    // this.props.getSkills(this.identity);
  }

  openAddSkillBox() {
    this.setState({ skillBoxOpen: true });
  }

  closeAddSkillBox() {
    this.setState({ skillBoxOpen: false });
  }

  render() {

    return (
      <div>

        <AddSkillBox
          open={this.state.skillBoxOpen}
          identity={this.identity}
          closeAddSkillBox={this.closeAddSkillBox.bind(this)}
          addSkill={this.props.addSkill}
          skills={this.props.skills.list.map(({ properties }) => properties.name)}
        />
        <ProfileSkillWrapper
          expanded={this.state.expanded}
          openAddSkillBox={this.openAddSkillBox.bind(this)}
        > 
          { this.props.skills.list.map((skill) => <SkillListItem key={skill.identity} { ...skill }/>) }
        </ProfileSkillWrapper>
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
