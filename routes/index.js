var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
//could use one line instead: var router = reqire('express').Router();

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());


var tweetBank = require('../tweetBank');



router.get('/', function(req,res){
	var tweets = tweetBank.list();
	res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
});

module.exports = router;

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  //change from list : list to tweets: lists
  res.render( 'index', { title: 'Twitter.js - Posts by '+name , tweets: list, showForm: true } );
});

router.get('/users/:name/tweets/:id', function(req, res) {
  var id = req.params.id;
  var name = req.params.name;
  var list = tweetBank.find( {id: id} );
  //change from list : list to tweets: lists
  res.render( 'index', { title: 'Twitter.js - Posts by '+name , tweets: list, showForm: true } );
});

router.post('/submit', function(req, res) {

  JSON.stringify(req.body, null, 2);
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);


  //redirects to homepage 
  res.redirect('/');
});