import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { Route } from 'react-router'

import * as actionCreators from '../redux/actions/onBoardingActions'

import { ContactForm, LocationForm } from './../components/componentIndex.js'

class OnBoardFlow extends Component {

  constructor(props) {
    super(props)

    this.handleContactSubmit = this.handleContactSubmit.bind(this)
    this.handleLocationSubmit = this.handleLocationSubmit.bind(this)

    this.options = [
      { value: "Detroit", label: "Detroit"},
      { value: "Ann Arbor", label: "Ann Arbor"},
      { value: "Lansing", label: "Lansing"}
    ]
    // fetch('/test', { accept: "application/json"})
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(result => {
    //     console.log(result)
    //   })

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
    const { match } = this.props
    return (
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
  return {
    onBoardingReducer: state.onBoardingReducer,
    auth: state.authReducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OnBoardFlow))

