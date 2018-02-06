import React, { Component } from 'react'

//React Router resources
import { Link } from 'react-router-dom'
import { Route } from 'react-router'

//Redux Resources
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

//Actions
import * as actionCreators from '../redux/actions/actionCreators'

//Components
import {
  ProfileSideCard,
  ProfileSkills,
} from './../components/componentIndex'

//Containers
import {
  ProfileSkillCard,
  ProfileCertificationsCard,
  ProfileExperienceCard,
} from './containerIndex'

//Assets
import fbLogo from '../assets/fbLogo.png'
import lnLogo from '../assets/lnLogo.png'

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
