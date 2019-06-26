const express = require("express");
//const path = require('path');
const bodyParser = require('body-parser');
var passport = require('passport');
const session = require('express-session');
//const LocalStrategy = require('passport-local').Strategy;
//const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');
//const db = require('./models');
var flash = require("connect-flash");
const indeed = require('indeed-scraper');

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

const app = express();
const PORT = process.env.PORT || 3001;

//Configure our app
//app.use(cors());
//app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, 'public')));
//app.use(session({ secret: 'mentorme', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Passport Config
require('./config/passport')(passport);

app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

if (!isProduction) {
  app.use(errorHandler());
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mentorme");
mongoose.set('debug', true);


//Models & routes
//require('./config/passport');
const routes = require("./routes");
// app.use(indeed);

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
