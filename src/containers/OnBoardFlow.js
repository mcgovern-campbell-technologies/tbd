import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { Route } from 'react-router'

import * as actionCreators from '../redux/actions/onBoardingActions'

import { ContactForm, LocationForm } from './../components/componentIndex.js'

class OnBoardFlow extends Component {

  options = [
    { value: "Detroit", label: "Detroit"},
    { value: "Ann Arbor", label: "Ann Arbor"},
    { value: "Lansing", label: "Lansing"}
  ]

  constructor(props) {
    super(props)

    this.handleContactSubmit = this.handleContactSubmit.bind(this)
    this.handleLocationSubmit = this.handleLocationSubmit.bind(this)

    this.state = { selectValue: "Detroit" }
  }

  handleLocationSubmit(e) {
    console.log(e.value)
    this.setState({ selectValue: e.value })
  }

  handleContactSubmit(values) {
    //needs some logic to handle if all of the information is present
    this.props.history.push(`${this.props.match.path}/locationInfo`)
  }

  render() {
    console.log('auth', this.props.auth)
    const { match } = this.props
    return (
<<<<<<< HEAD
      <div>

       <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="Placeholder" id="first_name" type="text" class="validate">
            </input>
            <label for="first_name">First Name</label>
          </div>

          <div class="input-field col s6">
            <input id="last_name" type="text" class="validate"> </input>
            <label for="last_name">Last Name</label>
          </div>

          <div class="input-field col s6">
            <input id="last_name" type="text" class="validate"> </input>
            <label for="last_name">E-mail</label>
          </div>

          <div class="input-field col s6">
            Placeholder for Job skills
          </div>
        </div>
      </form>
      <div>       
        <Route 
          exact
          path={`${match.path}/`} 
          component={() => (
            <ContactForm onSubmit={this.handleContactSubmit}/>
          )}
        />
        <Route 
          path={`${match.path}/locationInfo`} 
          component={ () => (
            <LocationForm 
              options={this.options}
              selectValue={this.selectValue}
              handleLocationSubmit={this.handleLocationSubmit}
            />
          )} 
        />
      </div>

    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    onBoardingReducer: state.onBoardingReducer,
    auth: state.authReducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OnBoardFlow))

