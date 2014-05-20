var express = require('express');
var app = express();
var public = __dirname + "/public";
require('./router')(app);
app.use(express.compress());
var oneDayInMillis = (24*60*60)*1000;

app.use(express.static(__dirname + '/public', { maxAge: oneDayInMillis }));
var port = process.env.PORT || 5000;
app.listen(port, function(){
});
