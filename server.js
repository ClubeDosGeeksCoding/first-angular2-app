var express = require('express');
var app = express();
var sqlite = require('sqlite-sync');
var path = require('path');

sqlite.connect('model/database.db');

app.use('/app', express.static(path.join(__dirname,'/app')));
app.use('/bootstrap', express.static(path.join(__dirname,'/bootstrap')));
app.use('/node_modules', express.static(path.join(__dirname,'/node_modules')));
app.use('/views', express.static(path.join(__dirname,'/views')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/persons', function(req, res){
	res.send(sqlite.run('SELECT * FROM person'));
});

app.post('/person', function(req, res){

});

app.put('/person/?id', function(req, res){
	
});

app.delete('/person/?id', function(req, res){
	
});

app.listen(3000);
