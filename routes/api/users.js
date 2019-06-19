//const Html = require('../../client/src/pages/Html');
// const Html = ({ body, title, user }) => `
//   <!DOCTYPE html>
//   <html>
//     <head>
//       <title>${title}</title>
//     </head>
//     <body style="margin:0">
//       <div id="app">${body}${user}</div>
//     </body>
//   </html>
// `;
const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Users = mongoose.model('Users');


router.post('/', (req, res) => {
  console.log('user signup');

  const { username, password } = req.body
  // ADD VALIDATION
  User.findOne({ username: username }, (err, user) => {
      if (err) {
          console.log('User.js post error: ', err)
      } else if (user) {
          res.json({
              error: `Sorry, already a user with the username: ${username}`
          })
      }
      else {
          const newUser = new User({
              username: username,
              password: password
          })
          newUser.save((err, savedUser) => {
              if (err) return res.json(err)
              res.json(savedUser)
          })
      }
  })
})

router.post(
  '/login',
  function (req, res, next) {
      console.log('routes/user.js, login, req.body: ');
      console.log(req.body)
      next()
  },
  passport.authenticate('local'),
  (req, res) => {
      console.log('logged in', req.user);
      var userInfo = {
          username: req.user.username
      };
      res.send(userInfo);
  }
)

router.get('/', (req, res, next) => {
  console.log('===== user!!======')
  console.log(req.user)
  if (req.user) {
      res.json({ user: req.user })
  } else {
      res.json({ user: null })
  }
})

router.post('/logout', (req, res) => {
  if (req.user) {
      req.logout()
      res.send({ msg: 'logging out' })
  } else {
      res.send({ msg: 'no user to log out' })
  }
})

// //POST new user route (optional, everyone has access)
// router.post('/', auth.optional, (req, res, next) => {
//   console.log("here3");
//   const { body: { user } } = req;

//   if(!user.email) {
//     return res.status(422).json({
//       errors: {
//         email: 'is required',
//       },
//     });
//   }

//   if(!user.password) {
//     return res.status(422).json({
//       errors: {
//         password: 'is required',
//       },
//     });
//   }
//   console.log("here1");

//   const finalUser = new Users(user);

//   finalUser.setPassword(user.password);

//   return finalUser.save()
//     .then(() => {
//       console.log("here");
//       res.json({ user: finalUser.toAuthJSON()})
//       // res.writeFile(
//       // Html({
//       //   body: "<div>Hello World</div>",
//       //   title: "testing",
//       //   user: finalUser.toAuthJSON()
//       // })
//       // )
//   })
// });

// // Render the login page.
// //router.get('/login', function(req, res) {
//   //res.redirect("/home");
//   //res.render('login', { title: 'Login', error: req.flash('error')[0] });
// //});
 
// // Authenticate a user.
// // router.post('/login', passport.authenticate('local', {
// //   successRedirect: '/home',
// //   failureRedirect: '/login',
// //   failureFlash: 'Invalid email or password.'
// // }));
 
// // Logout the user, then redirect to the home page.
// router.get('/logout', function(req, res) {
//   req.logout();
//   res.redirect('/');
// });

// //POST login route (optional, everyone has access)
// router.post('/login', auth.optional, (req, res, next) => {
//   const { body: { user } } = req;

//   if(!user.email) {
//     return res.status(422).json({
//       errors: {
//         email: 'is required',
//       },
//     });
//   }

//   if(!user.password) {
//     return res.status(422).json({
//       errors: {
//         password: 'is required',
//       },
//     });
//   }

//   return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
//     if(err) {
//       return next(err);
//     }

//     if(passportUser) {
//       const user = passportUser;
//       user.token = passportUser.generateJWT();

//       return res.json({ user: user.toAuthJSON() });
//     }

//     return status(400).info;
//   })(req, res, next);
// });

// //GET current route (required, only authenticated users have access)
// router.get('/current', auth.required, (req, res, next) => {
//   const { payload: { id } } = req;

//   return Users.findById(id)
//     .then((user) => {
//       if(!user) {
//         return res.sendStatus(400);
//       }
      
//       return res.json({ user: user.toAuthJSON() });
//     //res.render("home");
//     // res.send(
//     //   Html({
//     //     body: "Hello World",
//     //     title: "testing",
//     //     user: finalUser.toAuthJSON()
//     //   })
//     //   );
      
//     });
// });

module.exports = router;