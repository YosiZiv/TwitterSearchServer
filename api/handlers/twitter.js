const axios = require("axios");
exports.getTweetsByHashtags = async (req, res, next) => {
  const {
    headers: { authorization },
    body: { hashtags }
  } = req;
  // console.log(req.body, "function work");
  const response = await axios.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=%23${hashtags}`,
    {
      headers: {
        authorization
      }
    }
  );
  const filteredTweets = [];
  const allowed = ["text", "user", "created_at", "retweet_count"];
  const tweets = response.data.statuses;
  tweets.forEach(tweet => {
    // console.log("MAP FUNCTION LOG ", tweet);
    const filteredObject = Object.keys(tweet)
      .filter(key => allowed.includes(key))
      .reduce((obj, key) => {
        if (key === "user") {
          obj[key] = tweet[key].name;
          return obj;
        } else {
          obj[key] = tweet[key];
          return obj;
        }
      }, {});
    filteredTweets.push(filteredObject);
  });
  console.log(filteredTweets);

  return res.status(200).json({ tweets, filteredTweets });
};
// console.log(filterdObject);
// const resultAllow =
// console.log("INSIDE FILTER FUNCTION", key, resultAllow);
