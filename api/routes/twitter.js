const express = require("express");

// initalizing express router
const router = express.Router();

const { getTweetsByHashtag } = require("../handlers/twitter");

router.get("/hashtag/", getTweetsByHashtag);
// router.post("/getembed", getTwitterEmbed);
module.exports = router;
