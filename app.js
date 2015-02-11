//modules required for app 
var express = require ( 'express' );
var morgan = require( 'morgan' );


//initialize app
var app = express();

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
	res.send("hello, world");
})

app.get('/news', function(req,res){
	res.send("News is coming soon!");
})