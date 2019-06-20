const router = require("express").Router();
const interestController = require("../../controllers/interestController");

// Matches with "/api/interest"
router.route("/")
    .post(interestController.create);

// Matches with "/api/interest/:id"
router
    .route("/:id")
    .get(interestController.findById)
    .put(interestController.update)
    .delete(interestController.remove);

module.exports = router;