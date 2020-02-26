const express = require("express");

// initalizing express router
const router = express.Router();

const { getTweetsByHashtag } = require("../handlers/twitter");

router.post("/tweets", getTweetsByHashtag);
// router.post("/getembed", getTwitterEmbed);
module.exports = router;
