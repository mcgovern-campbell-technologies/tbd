var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 4000;

var jwtCheck = require('./auth/auth').jwtCheck;

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Serve static assets
app.use(express.static(__dirname + '/../client/build'));

// Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res) => {
//   res.sendFile(express.static(__dirname + '/../build/index.html'));
// });

//Protect routes by passing jwtCheck before the request handler
app.get('/api/protected', jwtCheck, function (req, res) {
  res.send('Secured Resource');
});

app.get('/api/unprotected', function(req, res) {
  res.send('Unsecured resource')
})

app.get('/test', (req, res) => {
  console.log('hit response')
  res.json({body: 'poop'})
})

app.listen(port);

console.log('Server now listening on port ' + port);
