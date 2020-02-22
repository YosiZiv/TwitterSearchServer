const express = require("express");

const router = express.Router();

const tweetsRoutes = require("./routes/twitter");

router.use("/tweeter", tweetsRoutes);
module.exports = router;
