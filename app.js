//modules required for app 
var express = require ( 'express' );
var morgan = require( 'morgan' );
var swig = require ('swig');


//initialize app
var app = express();

//swig.renderFile renders html
app.engine('html', require('swig').renderFile);


 //sets default view engine to html
app.set('view engine', 'html');
 //this maps 

//this path maps the views to our views path
//__dirname is a variable is a node variable
 //app.set('views', 'twitter-js' + '/views');
app.set('views', __dirname + '/views');

//turn of caching during development
swig.setDefaults({ cache: false });

//pass a local variable to the view 
//var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//res.render('index', {title: 'Hall of Fame', people: people});


//dev creates color coded status messages
//https://github.com/expressjs/morgan#expressconnect
//https://github.com/expressjs/morgan#dev
app.use(morgan('dev'))

//app is listening for requests on port 3000
app.listen(3000, function(){
	console.log("I'm listening now.");
});

//this tells the server what to do with
//HTTP requests
//get handler for when the browser requests / or "root"

app.get('/', function(req, res){
	//res.send("hello, world");
	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
    res.render('index', {title: 'Hall of Fame', people: people})
})

app.get('/news', function(req,res){
	res.send("News is coming soon!");
})