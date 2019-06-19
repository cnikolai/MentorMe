const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

<<<<<<< HEAD
=======
const routes = require("./routes");
>>>>>>> incorporating Cindy's passport.js into Michael's routes and models
const app = express();

const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

const PORT = process.env.PORT || 3001;

<<<<<<< HEAD
//Configure our app
=======
// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
>>>>>>> incorporating Cindy's passport.js into Michael's routes and models
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'mentorme', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));
<<<<<<< HEAD
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
=======


>>>>>>> incorporating Cindy's passport.js into Michael's routes and models
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

<<<<<<< HEAD
if(!isProduction) {
  app.use(errorHandler());
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mentorme");
mongoose.set('debug', true);

//Models & routes
require('./models/Users');
require('./config/passport');
const routes = require("./routes");
=======
require('./config/passport');
>>>>>>> incorporating Cindy's passport.js into Michael's routes and models

// Add routes, both API and view
app.use(routes);

<<<<<<< HEAD
//Error handlers & middlewares
if(!isProduction) {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});
=======
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mentorme");
>>>>>>> fixed working routes again from missing / in routes/api/index.js for user and interest router

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
