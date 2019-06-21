const router = require("express").Router();
const passport = require("passport");
const userController = require("../../controllers/userController");

// Matches with "/api/users"
// router.route("/")
//     .get(userController.findAll)
//     .post(userController.create);

// Matches with "/api/users/login"
// router.route("/login")
//     .post(userController.login);
router.get("/login", function (req, res) {
  const { username, password } = req.body
  res.json({username: username});
});

router.get("/user", function (req, res) {
    const { username, password } = req.body
    console.log("inside get user");
    res.json({username: username});
  });

router.post("/api/user/login"
, passport.authenticate('local', function(req,res) {
          //If Local Strategy Comes True
          console.log('Authentication Successful');
          req.flash('success','You are Logged In');
          //res.redirect('/');
          res.status(200).json({"username": "admin@gmail.com"});
}));

// Matches with "/api/user/:id"
// router
//     .route("/:id")
//     .get(userController.findById)
//     .put(userController.update)
//     .delete(userController.remove);

module.exports = router;
