var express     = require('express');
var fs          = require('fs');
var ejs         = require('ejs');
var path        = require('path');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var cookieParser = require('cookie-parser');
app.use(cookieParser());

var loadUser = require('./middleware/loadUser');
app.use(loadUser);

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/beat-connection-01');

var kickPath = path.join(__dirname, 'samples/kick.wav');
var snarePath = path.join(__dirname, 'samples/snare.wav');
var hihatPath = path.join(__dirname, 'samples/hihat.wav');
var perc01Path = path.join(__dirname, 'samples/perc-1.wav');
var tambPath = path.join(__dirname, 'samples/tamb.wav');
var cymbalPath = path.join(__dirname, 'samples/cymbal.wav');

app.get('/music/kick', function(req, res){
    res.set({'Content-Type': 'audio/mpeg'});
    var readStream = fs.createReadStream(kickPath);
    readStream.pipe(res);
});

app.get('/music/snare', function(req, res){
    res.set({'Content-Type': 'audio/mpeg'});
    var readStream = fs.createReadStream(snarePath);
    readStream.pipe(res);
});

app.get('/music/hihat', function(req, res){
    res.set({'Content-Type': 'audio/mpeg'});
    var readStream = fs.createReadStream(hihatPath);
    readStream.pipe(res);
});

app.get('/music/perc01', function(req, res){
    res.set({'Content-Type': 'audio/mpeg'});
    var readStream = fs.createReadStream(perc01Path);
    readStream.pipe(res);
});

app.get('/music/tamb', function(req, res){
    res.set({'Content-Type': 'audio/mpeg'});
    var readStream = fs.createReadStream(tambPath);
    readStream.pipe(res);
});

app.get('/music/cymbal', function(req, res){
    res.set({'Content-Type': 'audio/mpeg'});
    var readStream = fs.createReadStream(cymbalPath);
    readStream.pipe(res);
});

var indexRouter = require('./routes/index');
app.use('/', indexRouter);

var apiRouter = require('./routes/api/apiRouter');
app.use('/api/beats', apiRouter);

var users = require('./routes/api/users');
app.use('/api/users', users);

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("...listening on " + port);
});
