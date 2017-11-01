// src/Callback/Callback.js

import React from 'react';
// import loading from './loading.svg';

class Callback extends React.Component {
  // componentDidMount() {
  //   const profile = JSON.parse(window.localStorage.getItem('profile'));
  //   console.log('firing loginSuccess', profile)
  //   this.props.loginSuccess(profile)
  // }
  render() {
    return (
      <div>
        <img src="" alt="loading"/>
        <p>This is the callback URL for auth0</p>
      </div>
    );
  }
}

export default Callback;
