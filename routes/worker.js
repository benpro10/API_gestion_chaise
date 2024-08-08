const express = require("express");
const router = express.Router();
const { createWorker } = require("../controllers/worker");

router.post("/createWorker", createWorker);

module.exports = router;
