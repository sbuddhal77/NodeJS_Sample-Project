// modules =================================================
var express = require('express');
var app = express();

app.use(express.static('UI'))
app.use(express.static('bower_components'))

var port = 8080; // set our port

// start app ===============================================
app.listen(port,function(){
	console.log('App listening on port ' + port); 
});
