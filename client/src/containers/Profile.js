import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import fbLogo from '../assets/fbLogo.png'
import lnLogo from '../assets/lnLogo.png'

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="section row">
          <div className="col s3">
            PLACEHOLDER FOR PROFILE IMAGE
            <p className="font-size-l font-bold margin-bottom-none">Rob Johnson</p>
            <p className="font-size-m margin-top-none">Machinist</p>
            <button className="waves-effect waves-light btn center margin-bottom"> Book </button>

            <div className="divider"></div>
            <div>
              <img className="social-media" src={fbLogo}/>
              <img className="social-media" src={lnLogo}/>
            </div>
          </div>

          <div className ="col s9">
            <span className="font-size-xl font-bold">Overview  Skills  Reviews</span>
            <div className="divider"></div>

            <p>
              <span>About Rob</span>

              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum </p>

            </p>

            <p>Message Rob</p>
            <div className="divider"></div>

            <p>Jobs in the last 6 months</p>

            <p>Company X</p>

            <div className="divider"></div>
            <h3>Skills</h3>
            <span>Rob is skilled at...</span>
            <ul>
              <li>Skill 1</li>
              <li>Skill 1</li>
              <li>Skill 1</li>
              <li>Skill 1</li>
            </ul>

            <p>Certifications</p>

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

export default Profile