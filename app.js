var express = require('express');
var app = express();

var path = require('path');

var engine = require('ejs-locals');
app.engine('ejs', engine);
app.set('views', path.join( __dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views/html'));
app.use(express.static(__dirname + '/views/stylesheets'));
app.use(express.static(__dirname + '/views/images'));
app.use(express.static(__dirname + '/views/js'));

app.get('/', function (req, res) {
    var t = 'B3';
	
    res.render('index', { title: t });
});

var server = app.listen(8080, function () {

  var port = server.address().port;

  console.log('App listening at http://localhost:%s', port);

});