import React from 'react';
import {Redirect} from 'react-router-dom';

class Callback extends React.Component {
  constructor(props) {
    super(props)
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.checkUser = this.checkUser.bind(this);
  }

  componentWillMount() {
    this.checkUser();
  }

  checkUser() {
    const {authService} = this.props
    this.props.loginRequest()
    this.handleAuthentication().then(profile => {
      if (authService.isAuthenticated()) {
        this.props.getUser(profile);
        this.props.loginSuccess(profile);
      } else {
        this.props.loginError({error: "something went wrong."});
      }
    });
  }

  /* Create handleAuthentication handler to kick off authService if correct URL hash exists */
  handleAuthentication () {
    return new Promise ((resolve, reject) => {
      if (/access_token|id_token|error/.test(this.props.location.hash)) {
        this.props.authService.handleAuthentication().then(profile => {
          resolve(profile);
        });
      }
    })
  }

  render() {

    if (!this.props.auth.isFetching) {
      return <Redirect to="/dashboard" />
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
