import React, { Component } from 'react';
import { connect } from 'react-redux';

import {

} from './containerIndex';
import {

} from './../components/componentIndex';

class TeamManager extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  render() {
    return (
      <div>
        hi bidge
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {

  }
}


export default TeamManager