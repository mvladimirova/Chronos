var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    loginFunctionality = require('./routes/login'),
    homeFunctionality = require('./routes/home'),
    bodyParser = require('body-parser');
    //redis= require('redis');

var pathToRoot = __dirname + '/../';

// Connect to the database
mongoose.connect('mongodb://localhost/chronosDB');
var db = mongoose.connection;

//// Connect to redis
//var redisClient = redis.createClient();
//redisClient.on("error", function(err){
//    console.log("An error occurred with redis:" + err);
//});


app.set('views', pathToRoot + '/client/views');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(express.static(pathToRoot + '/client-js'));


app.get('/partials/:partialPath', function(req, res){
    res.render(pathToRoot + '/client/views/partials/' + req.params.partialPath);
});
app.get('/', homeFunctionality.home);

app.post('/register', loginFunctionality.createNewUser);

app.get('/login', loginFunctionality.login);


var port = 1337;
app.listen(port);

// Log events
console.log("Server is listening on port " + port);
db.on('error', function() {
    console.log("Connection error occurred..");
});
db.once('open', function(){
    console.log("Connected to chronos database");
});