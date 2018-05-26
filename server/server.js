var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 4000;
console.log('=======================================')
console.log(process.env.neo4jConnectionString)
console.log(process.env.DOMAIN)
console.log('=======================================')

var jwtCheck = require('./auth/auth').jwtCheck;

const GraphApi = require('./database/graphApi.js')
const { databaseCredentials } = require('./secrets.js');
const { username, password, connection } = databaseCredentials

//routers
const {
  contractorRouter,
  skillRouter,
  certificationRouter,
  locationRouter,
  positionRouter,
  projectRouter,
  teamRouter,
} = require('./routers/routersIndex');

var app = express();
const graphApi = new GraphApi(username, password, connection);

/****Third Party Middlewares****/
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/****Homebrew Middlewares****/
app.use('/api', (req, res, next) => {
  // Temporarily set CORS headers to be open
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")

  //adds neo4j driver to the request object
  req.graphApi = graphApi;
  next();
});

/****Serve static assets****/
app.use(express.static(__dirname + '/../client/build'));

//Protect routes by passing jwtCheck before the request handler
app.get('/api/protected', jwtCheck, function (req, res) {
  res.send('Secured Resource');
});

app.get('/api/unprotected', function(req, res) {
  res.send('Unsecured resource')
})

/****Apply Routers****/
app.use('/api/contractor', contractorRouter);
app.use('/api/skill', skillRouter);
app.use('/api/certification', certificationRouter);
app.use('/api/location', locationRouter);
app.use('/api/position', positionRouter);
app.use('/api/project', projectRouter);
app.use('/api/team', teamRouter);

app.listen(port);

console.log('Server now listening on port ' + port);
