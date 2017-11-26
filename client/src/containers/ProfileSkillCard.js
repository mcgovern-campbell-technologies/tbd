import React, { Component } from 'react';
import _ from 'lodash';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  SkillChip,
  ProfileSkillWrapper,
} from './../components/componentIndex'



//Actions
import * as actionCreators from '../redux/actions/actionCreators';

class ProfileSkillCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }

  componentWillMount() {
    if(!this.props.checked) {
      this.props.getSkills();
    }
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
      <ProfileSkillWrapper expanded={this.state.expanded}> 
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
    )
  }
}

function mapStateToProps({ skills }) {
  return skills;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSkillCard);