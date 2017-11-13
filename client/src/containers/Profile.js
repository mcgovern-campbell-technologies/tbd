import React, { Component } from 'react'

//React Router resources
import { Link } from 'react-router-dom'
import { Route } from 'react-router'

//Redux Resources
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

//Actions
import * as actionCreators from '../redux/actions/userActions'

//Components
import {
  ProfileSideCard,
  ProfileCertifications,
  ProfileSkills,
} from './../components/componentIndex'

//Assets
import fbLogo from '../assets/fbLogo.png'
import lnLogo from '../assets/lnLogo.png'

class Profile extends Component {
  constructor(props) {
    super(props);
    if (!this.props.profile) {
      console.log('inside the profile check');
      // this.props.getUser();
    }
  }
  render() {
    const { skills, certifications, profile } = this.props;
    const { picture, name, given_name } = profile;
    return (
      <div>
        <div className="section row">
          <ProfileSideCard
            picture={picture}
            name={name}
          />
          <div className ="col s5">
            <span className="font-size-xl font-bold">Overview  Skills  Reviews</span>
            <div className="divider"></div>


            <p>Message Rob</p>
            <div className="divider"></div>

            <p>Jobs in the last 6 months</p>

            <p>Company X</p>

            <div className="divider"></div>
            <ProfileSkills
              skills={skills}
              given_name={given_name}
            />

            <ProfileCertifications
              certifications={certifications}
              given_name={given_name}
            />

            <div className="divider"></div>

            <h3>Reviews</h3>
            <div className="divider"></div>

            <div className="col s1">
            Company X
            </div>

            <div className="col s8">
            Company info  basdfasdfadglahglakfglksjlkasjlgfkjlasfjglj
            alsgjdlaskjdgl;akjsdg;lajsdlgkjsladkjg
            </div>


          </div>
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  console.log('inside Profile mapStateToProps');
  const { user, auth } = state;
  const { profile } = auth;
  const { skills, location, certifications } = user;
  console.log('in profile map state to props', profile)
  return {
    profile,
    skills,
    location,
    certifications,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))
