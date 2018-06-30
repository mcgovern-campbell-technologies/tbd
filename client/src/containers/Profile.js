import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import * as actionCreators from '../core/actions/actionCreators'
import {
  ProfileSideCard,
} from './../components/componentIndex'
import {
  ProfileSkillCard,
  ProfileCertificationsCard,
  ProfileExperienceCard,
} from './index'

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="pa2">
          <ProfileSideCard
            user={this.props.user}
            updateUser={this.props.updateUser}
          />
        </div>
        <div className ="section row">
          {
            this.props.user.identity ?
            <div>
              <ProfileSkillCard />
              <ProfileCertificationsCard />
              <ProfileExperienceCard />
            </div> : null
          }
          <div className="divider"></div>
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  if (state.user) {
    const user = state.user;
    return { user }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))
