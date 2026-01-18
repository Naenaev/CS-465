const express = require("express");
const router = express.Router();

const ctrlTravlr = require("../controllers/travlr");

/* GET home page */
router.get("/", ctrlTravlr.index);

module.exports = router;
