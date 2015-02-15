var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
//could use one line instead: var router = reqire('express').Router();


var tweetBank = require('../tweetBank');

router.get('/', function(req,res){
	var tweets = tweetBank.list();
	res.render('index', {title: 'Twitter.js', tweets: tweets,  showForm: true});
});

module.exports = router;

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  //change from list : list to tweets: lists
  res.render( 'index', { title: 'Twitter.js - Posts by '+name , tweets: list } );
});

router.get('/users/:name/tweets/:id', function(req, res) {
  var id = req.params.id;
  var name = req.params.name;
  var list = tweetBank.find( {id: id} );
  //change from list : list to tweets: lists
  res.render( 'index', { title: 'Twitter.js - Posts by '+name , tweets: list } );
});