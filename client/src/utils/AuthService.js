import auth0 from 'auth0-js';

export default class AuthService {
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  auth0 = new auth0.WebAuth({
    domain: 'mcgovern-campbell-technologies.auth0.com',
    clientID: '81rhOqw5QUmgjEZ8osYF4PDQc0pCGaSt',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'http://localhost:4000/api',
    responseType: 'token id_token',
    scope: 'openid profile'
  });

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    return new Promise ((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          //get profile and then set session information
          let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
          localStorage.setItem('access_token', authResult.accessToken);
          localStorage.setItem('id_token', authResult.idToken);
          localStorage.setItem('expires_at', expiresAt);

          this.auth0.client.userInfo(authResult.accessToken, function(err, user) {

            localStorage.setItem('profile', JSON.stringify(user));
            resolve();
          });

          // navigate to the home route
          // history.replace('/home');
        } else if (err) {
          // history.replace('/home');
          console.log(err);
          reject(err)
        }
      });
    })
  }

  logout() {
    // Clear access token, ID token and profile from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('profile');
    // navigate to the home route
    // history.replace('/home');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  getProfile() {
    // Retrieves the profile data from window.localStorage
    const profile = window.localStorage.getItem('profile');
    return profile ? JSON.parse(window.localStorage.profile) : {};
  }
}
