import React, { Component } from 'react';
import _ from 'lodash';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  SkillChip,
  ProfileSkillWrapper,
  AddSkillBox,
} from './../components/componentIndex'



//Actions
import * as actionCreators from '../redux/actions/actionCreators';

class ProfileSkillCard extends Component {

  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      expanded: false,
      skillBoxOpen: false,
    }
  }

  componentWillMount() {
    console.log('componentWillMount')
    if (!this.props.checked && this.props.user.identity !== undefined) {
      console.log('i pass the skill check')
      this.props.getSkills(this.props.user.identity);
    }
  }

  // componentWillUpdate() {
  //   console.log(this.props.user)
  //   if (!this.props.checked && this.props.user.identity !== undefined) {
  //     console.log('i pass the skill check')
  //     this.props.getSkills(this.props.user.identity);
  //   }
  // }

  openAddSkillBox() {
    this.setState({ skillBoxOpen: true });
  }

  closeAddSkillBox() {
    this.setState({ skillBoxOpen: false });
  }

  render() {

    const styles = {
      display: 'flex',
      flexWrap: 'wrap',
    }

    const testSkills = _.range(0, 40).map(value => ({
      properties: { name: 'test' },
      identity: value 
    }))

    return (
      <div>
        <AddSkillBox 
          open={this.state.skillBoxOpen}
          closeAddSkillBox={this.closeAddSkillBox.bind(this)}
          addSkill={this.props.addSkill}
        />
        <ProfileSkillWrapper 
          expanded={this.state.expanded}
          openAddSkillBox={this.openAddSkillBox.bind(this)}
        > 
          { 
            this.state.expanded ? 
                testSkills.map(({ properties, identity }) => 
                  <SkillChip 
                    key={identity} 
                    { ...properties }
                  />)
              : 
                testSkills
                  .slice(0, 5)
                  .map(({ properties, identity }) => 
                    <SkillChip 
                      key={identity} 
                      { ...properties }
                    />)

              
          }
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