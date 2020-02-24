const express = require("express");

// initalizing express router
const router = express.Router();

const { getTweetsByHashtags, getTwitterEmbed } = require("../handlers/twitter");

router.post("/tweets", getTweetsByHashtags);
// router.post("/getembed", getTwitterEmbed);
module.exports = router;
