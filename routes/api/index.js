const router = require("express").Router();
const userRoutes = require("./user");
const interestRoutes = require("./interest");

// routes
router.use("/user", userRoutes);
router.use("/interest", interestRoutes);

module.exports = router;
