var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

module.exports = {
  jwtCheck: jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: "https://mcgovern-campbell-technologies.auth0.com/.well-known/jwks.json"
    }),
    audience: 'http://localhost:4000/api',
    issuer: "https://mcgovern-campbell-technologies.auth0.com/",
    algorithms: ['RS256']
  })
}
