var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//middleware pointers to static file directories
app.use(express.static(__dirname + '/../client'));

app.listen(port);

console.log('Server now listening on port ' + port);
