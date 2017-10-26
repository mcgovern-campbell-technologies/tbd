// This component just used for testing.
import React from 'react';
import AuthService from '../utils/AuthService'

export default (props) => {
  console.log('Test props:');
  console.log(props);
  return (
    <div>
      <h1>This is a test</h1>
      <p>props.auth = {props.auth}</p>
      <button onClick={() => {
          props.authService.login();
          props.loginRequest();
        }}>Login</button>

      <button onClick={() => {
          props.logoutSuccess();
          AuthService.logout();
        }}>Log out</button>
    </div>
  )
}
