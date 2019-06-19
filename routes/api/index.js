const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
//router.use("/books", bookRoutes);

// Authentication routes
router.use('/users', require('./users'));

module.exports = router;
