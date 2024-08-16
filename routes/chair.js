const express = require("express");
const router = express.Router();
const { createChair, deleteChair, getChairs } = require("../controllers/chair");

router.post("/createChair", createChair);
router.post("/deleteChair", deleteChair);
router.get("/chairs", getChairs);

module.exports = router;
