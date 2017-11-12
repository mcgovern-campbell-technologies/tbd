import React from 'react';
import {Redirect} from 'react-router-dom';

class Callback extends React.Component {
  componentWillMount() {
    const {authService, handleAuthentication} = this.props
    handleAuthentication(this.props).then(_ => {
      if (authService.isAuthenticated()) {
        this.props.loginSuccess(authService.getProfile());
      } else {
        this.props.loginError({error: "something went wrong."});
      }
    });
  }

  render() {

    if (!this.props.auth.isFetching) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <img src="" alt="loading"/>
        <p>Trying to log you in...</p>
      </div>
    );
  }
}

export default Callback;
