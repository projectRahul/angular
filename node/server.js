var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
var cors = require('cors'),


mongoose = require('mongoose'),
User = require('./api/models/userModel'), //created model loading here
bodyParser = require('body-parser');

app.use(cors());

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/employeedb', { useNewUrlParser: true }); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/userRoutes'); //importing route
routes(app); //register the route



app.listen(port);

console.log(port);

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


//Middleware If any other route call which is not present
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});