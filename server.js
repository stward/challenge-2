var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'));

app.get('/', function(req, res){
	res.readFile('index.html')
});

app.listen(3000);