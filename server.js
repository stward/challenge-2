var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();

var blogs = require('./routes/blog');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api/blogs', blogs)

app.get('/', function(req, res){
	res.readFile('index.html')
});

app.listen(3000);