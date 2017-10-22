// This component just used for testing.
import React from 'react';

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
          props.authService.logout();
        }}>Log out</button>
    </div>
  )
}
