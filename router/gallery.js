const express = require("express");
const router = express.Router();
const galController = require("../controllers/galController");

router.get("/", galController.renderPics);
module.exports = router;
