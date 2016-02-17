var express = require('express');
var apiRouter = express.Router();

var Beat = require('../../models/beat');

apiRouter.get('/', function(req, res){
  Beat.find({}, function(err, databaseBeats){
    res.json( {beats: databaseBeats} );
  });

});

apiRouter.post('/', function(req, res){
  console.log('Beat info', req.body);
  var newBeat = new Beat( req.body.beat );
  newBeat.save(function(err, dbBeat){
    res.json( dbBeat );
  });
});

module.exports = apiRouter;
