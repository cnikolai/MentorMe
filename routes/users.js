const express = require('express');
const router = express.Router();
const passport = require('passport');
const bodyParser = require('body-parser');
var fs = require('fs');

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
  const { username, password, email, isMentee } = req.body;
  console.log("isMentee: ", isMentee);
  let errors = [];
  var profileImage = "";
  var location = "";

  if (!username || !password || !email || !isMentee) {
    errors.push({ msg: 'Please enter all fields' });
  }

  // if (password != password2) {
  //   errors.push({ msg: 'Passwords do not match' });
  // }

  if (password.length < 3) {
    errors.push({ msg: 'Password must be at least 3 characters' });
  }

  if (errors.length > 0) {
    res.json({
      'register': {
        errors,
        username,
        password
      }
    });
  } else {
    db.User.findOne({ username: username }).then(user => {
      if (user) {
        errors.push({ msg: 'Username already exists' });
        res.json({
          'register': {
            errors,
            username,
            password
          }
        });
      } else {
        const newUser = new db.User({
          username,
          email,
          isMentee
        });
        newUser.setPassword(req.body.password);
        console.log("newUser: ", newUser);
        db.User
          .create(newUser)
          .catch(err => console.log(err));
        res.json({ "ok": "You are now registered and can log in" });
      }
    });
  }
});

// Login
router.post('/login', bodyParser.urlencoded({ extended: true }), (req, res, next) => {
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
      console.log("User object: " + req.user);
      if (err) { return next(err); }
      // return res.redirect('/?username=' + user.username);
      return res.json(req.user);
    });
  })(req, res, next);
});

// Logout
router.post('/logout', (req, res) => {
  console.log("inside logout");
  req.logout();
  return res.redirect('/users/login');
});

// interest saving
router.post("/save-interest/:id", function (req, res) {
  db.Interest.create(req.body)
    .then(function (dbInterest) {
      return db.User.findOneAndUpdate({ _id: req.params.id }, { $set: { interest: dbInterest._id } }, { new: true });

    })
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// get user with interest
router.get("/single-user/:id", function (req, res) {
  db.User.findOne({ _id: req.params.id })
    // ..and populate all of the interests associated with it
    .populate("interest")
    .populate("savedMentor")
    .then(function (dbUser) {
      console.log(dbUser)
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// get all user with interest 
router.get("/all-users", function (req, res) {
  db.User.find({})
    // ..and populate all of the interests associated with it
    .populate("interest savedMentor")
    // .populate("SavedMentor")
    .then(function (dbUser) {
      console.log(dbUser)
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

//post profile picture
router.post("/profile/:id", function (req, res) {
  console.log(req.body);
  console.log("profile id:" + req.params.id);
  console.log("profile image url: " + req.body.profilepictureurl);
  return db.User.findOneAndUpdate({ _id: req.params.id }, { $set: { profileImage: req.body.profilepictureurl, location: req.body.location, profession: req.body.profession, interests: req.body.interests } },{new: true}, (err, doc) => {
    if (err) {
        console.log("Error updating user profile data: ", err);
    }
    console.log(doc);
});
});

//get profile picture
router.get("/profile/:id", async function (req, res) {
  console.log("profile id:" + req.params.id);
  db.User.findOne({ _id: req.params.id })
    // ..and populate all of the interests associated with it
    .then(function (dbUser) {
      console.log("dbUser: ", dbUser);
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// update interest
router.put("/save-interest/:id", function (req, res) {
  db.Interest.update(req.body)
    .then(function (dbInterest) {
      return db.User.findOneAndUpdate({ _id: req.params.id }, { $set: { interest: dbInterest._id } }, { new: false });

    })
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// mentor saving (ID OF USER)
router.post("/save-mentor/:id", function (req, res) {
  db.SavedMentor.create(req.body)
    .then(function (dbModel) {
      return db.User.findOneAndUpdate({ _id: req.params.id }, { $push: { savedMentor: dbModel._id } }, { new: true });

    })
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// ID OF MENTOR
router.delete("/delete-mentor/:id", function (req, res) {
  db.SavedMentor.deleteOne({ _id: req.params.id })
    .then(function (dbModel) {
      res.json(dbModel);
    })
    .catch(function (err) {
      res.json(err);
    });
});

// get All Mentors
router.get("/mentors", function (req, res) {
  db.User.find({
    isMentee: false
  })
    // ..and populate all of the interests associated with it
    .populate("interest")
    .then(function (dbUser) {
      console.log(dbUser)
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});


module.exports = router;
