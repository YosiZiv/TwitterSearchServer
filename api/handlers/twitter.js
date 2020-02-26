const { api } = require("../../httpConfig");
exports.getTweetsByHashtag = async (req, res, next) => {
  const {
    hashtag = null,
    startDate = null,
    endDate = null,
    language = null,
    reqData = null
  } = req.body;
  try {
    let params = "";
    const hashtagUrl = `%23${hashtag.value}`;
    const startDateUrl = `+since%3A${startDate}`;
    let endDateUrl = `+until%3A${endDate}`;
    let languageUrl = `&lang=${language}`;
    if (hashtag) {
      params = params.concat(
        hashtagUrl,
        startDate ? startDateUrl : "",
        endDate ? endDateUrl : "",
        language ? languageUrl : ""
      );
    }
    const twitterReq = {
      url: `https://api.twitter.com/1.1/search/tweets.json?q=` + params,
      method: "GET"
    };
    const response = await api(twitterReq);
    const tweets = response.data.statuses;
    const filteredTweets = []; // INIT EMPTY ARRAY FOR FILTER KEYS TWEETS OBJECTS

    // THIS ABOVE LINE ONLY NEED IN CLIENT REQUIRE FILTERED DATA
    if (tweets.length && reqData && typeof reqData === "object") {
      tweets.forEach(tweet => {
        const filteredObject = Object.keys(tweet)
          .filter(key => reqData.includes(key))
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
    }
    return res.status(200).json({ tweets, filteredTweets });
  } catch (err) {
    return res.status(400).json({ errors: "somting went wrong :/", err });
  }
};
