var http = require('http');
var express = require('express');
var app = express();

require('./config/express')(app);
require('./config/passport')();
require('./config/database')('mongodb://localhost/contatooh');

app.listen(app.get('port'), function(){
	console.log('Express server escutando na porta ' + app.get('port'));
});