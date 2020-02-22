const express = require("express");

// initalizing express router
const router = express.Router();

const { getTweetsByHashtags } = require("../handlers/twitter");

router.post("/tweets", getTweetsByHashtags);

module.exports = router;
