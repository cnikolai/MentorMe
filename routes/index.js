const router = require("express").Router();
//const userRoutes = require("./user");
const usersRoutes = require("./users");
const interestRoutes = require("./interest");

// routes
//router.use("/user", userRoutes);
router.use("/users", usersRoutes);
router.use("/interest", interestRoutes);

module.exports = router;
