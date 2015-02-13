var http = require('http');
var express = require('express');
var app = express();

var config = require('./config/config')();

require('./config/express')(app);
require('./config/passport')();
require('./config/database')(config.db);

app.listen(app.get('port'), function(){
	console.log('Express server escutando na porta ' + app.get('port'));
});