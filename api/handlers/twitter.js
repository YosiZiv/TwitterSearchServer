const { api } = require("../../httpConfig");
exports.getTweetsByHashtags = async (req, res, next) => {
  const { hashtags } = req.body;
  console.log(hashtags, "function work");
  try {
    const twitterReq = {
      url: `https://api.twitter.com/1.1/search/tweets.json?q=%3A${hashtags}`,
      method: "GET"
    };
    const response = await api(twitterReq);
    // if(response.data.statuses)
    console.log("RESPONSE DATA ", response.data);

    const filteredTweets = [];
    const allowed = ["id_str", "text", "user", "created_at", "retweet_count"];
    const tweets = response.data.statuses;
    tweets.forEach(tweet => {
      // console.log("MAP FUNCTION LOG ", tweet);
      const filteredObject = Object.keys(tweet)
        .filter(key => allowed.includes(key))
        .reduce((obj, key) => {
          if (key === "user") {
            obj[key] = tweet[key].name;
            obj["screen_name"] = tweet[key].screen_name;
            return obj;
          } else {
            obj[key] = tweet[key];
            return obj;
          }
        }, {});
      filteredTweets.push(filteredObject);
    });
    console.log(tweets);

    return res.status(200).json({ tweets, filteredTweets });
  } catch (err) {
    console.log(err);
    throw err;
  }
};
// exports.getTwitterEmbed = async (req, res, next) => {
//   const { screen_name, id_str } = req.body;
//   console.log(screen_name, id_str);
//   try {
//     const twitterReq = {
//       url: `https://publish.twitter.com/oembed?url=https%3A%2F%2Ftwitter.com%2F${screen_name}%2Fstatus%2F${id_str}`,
//       method: "GET"
//     };
//     const response = await api(twitterReq);
//     const tweet = response.data.html;
//     console.log(response.data.html);

//     return res.status(200).json({ tweet });
//   } catch (err) {
//     console.log(err);
//   }
// };
// console.log(filterdObject);
// const resultAllow =
// console.log("INSIDE FILTER FUNCTION", key, resultAllow);
