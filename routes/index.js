const router = require("express").Router();
//const userRoutes = require("./user");
const usersRoutes = require("./users");
const interestRoutes = require("./interest");
const indeedRoutes = require("./indeedscraper")

// routes
//router.use("/user", userRoutes);
router.use("/users", usersRoutes);
router.use("/interest", interestRoutes);
router.use("/indeedscraper", indeedRoutes);

module.exports = router;
