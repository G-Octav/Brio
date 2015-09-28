var client = require('mongodb').MongoClient;
var express = require('express');
var http = require('http');
var app = express();
var fs = require('fs');

// Set some paths for the views and scripts
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/script'));
app.use(express.static(__dirname + '/resource'));

app.get('/test', function(request, response) {
	response.send('Hello world');
	console.log('Something happened.');
});

app.get('/', function(request, response) {
	response.sendFile('index.html');
	console.log('A request was made to the homepage.');
});

console.log('Listening to port 3333 on localhost');
app.listen(3333);
