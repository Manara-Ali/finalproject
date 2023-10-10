const express = require("express");
const learnersController = require("../controllers/learnersController");
const router = express.Router();

router.route("/").get(learnersController.getAllLearners);

module.exports = router;
