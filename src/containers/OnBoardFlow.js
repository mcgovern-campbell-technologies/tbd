import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { Route } from 'react-router'

import * as actionCreators from '../redux/actions/onBoardingActions'

import { ContactForm } from './../components/componentIndex.js'

class OnBoardFlow extends Component {

  constructor(props) {
    super(props)

    this.handleContactSubmit = this.handleContactSubmit.bind(this)
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
          path={`${match.path}/contactInfo`} 
          component={() => (
            <ContactForm onSubmit={this.handleContactSubmit}/>
          )}
        />
        <Route 
          path={`${match.path}/locationInfo`} 
          component={ () => <h1>hi</h1>} 
        />
      </div>
      
    )
  }
}

function mapStateToProps(state) {
  return {
    onBoardingReducer: state.onBoardingReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OnBoardFlow))

