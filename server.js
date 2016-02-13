var express = require('express');
var fs = require('fs');
var ejs = require('ejs');
var path = require('path');

var app = express();
app.use(express.static(__dirname + '/public'));

var kickPath = path.join(__dirname, 'samples/kick.wav');
var snarePath = path.join(__dirname, 'samples/snare.wav');
var hihatPath = path.join(__dirname, 'samples/hihat.wav');

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

var port = 3000;
app.listen(port, function(){
  console.log("...listening on " + port);
});
