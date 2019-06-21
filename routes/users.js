const express = require('express');
const router = express.Router();
const passport = require('passport');
const bodyParser = require('body-parser');

// Load User model
const db = require('../models');
const { forwardAuthenticated } = require('../config/auth');

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.send('login'));

// Register Page
router.get('/register', forwardAuthenticated, (req, res) => res.send('register'));

// Register
router.post('/register', (req, res) => {
  console.log("inside post register", req.body);
  const { username, password } = req.body;
  let errors = [];

  if (!username || !password) {
    errors.push({ msg: 'Please enter all fields' });
  }

  // if (password != password2) {
  //   errors.push({ msg: 'Passwords do not match' });
  // }

  if (password.length < 3) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.json({'register': {
      errors,
      username,
      password
    }});
  } else {
    db.User.findOne({ username: username }).then(user => {
      if (user) {
        errors.push({ msg: 'Username already exists' });
        res.json({'register': {
          errors,
          username,
          password
        }});
      } else {
        const newUser = new db.User({
          username
        });
        newUser.setPassword(req.body.password);
        console.log("newUser: ",newUser);
        db.User
          .create(newUser)
          .catch(err => console.log(err));
        res.json({"ok": "You are now registered and can log in"});
      }
    });
  }
});

// Login
router.post('/login',bodyParser.urlencoded({ extended: true }), (req, res, next) => {
  console.log("inside post login");
  passport.authenticate('local', function (err, user, info) {
    console.log("inside passport logic");
    console.log("info", info);
    if (err) { return next(err) }
    if (!user) {
         console.log('bad authentication');
         //req.session.messages = [info.message];
         return res.redirect('/login')
    }
    req.logIn(user, function (err) {
         console.log('good authentication');
         if (err) { return next(err); }
         return res.redirect('/?username='+user.username);
    });
})(req, res, next);
});

// Logout
router.post('/logout', (req, res) => {
  req.logout();
  res.redirect('/users/login');
});

module.exports = router;
