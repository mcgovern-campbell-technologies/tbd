// This component just used for testing.
import React from 'react';
import AuthService from '../utils/AuthService'

export default (props) => {
  return (
    <div>
      <h1>This is the login page</h1>
      <p>isAuthenticated: {props.auth.isAuthenticated.toString()}</p>
      <button
        onClick={props.authService.login}
        disabled={props.auth.isAuthenticated}
      >
        Login
      </button>

      <button onClick={() => {
          props.logoutSuccess();
          props.authService.logout();
        }}>Log out</button>
    </div>
  )
}
