const { api } = require("../../httpConfig");

const filterArrayOfObjects = (array, filters) => {
  const filteredArray = []; // INIT EMPTY ARRAY FOR FILTER KEYS TWEETS OBJECTS
  array.forEach(item => {
    const filteredObject = Object.keys(item)
      .filter(key => {
        return filters.includes(key);
      })
      .reduce((obj, key) => {
        if (key === "user") {
          // if key is user give only user name a bit of hack+ but work for now
          obj[key] = item[key].name;
          return obj;
        }
        obj[key] = item[key];
        return obj;
      }, {});
    filteredArray.push(filteredObject);
  });
  return filteredArray;
};

exports.getTweetsByHashtag = async (req, res, next) => {
  const {
    hashtag = "",
    startDate = "",
    endDate = "",
    language = "",
    filters = null
  } = req.query;
  console.log("FUNCTION HIT", hashtag, startDate, endDate, language);

  try {
    let params = "";
    const hashtagUrl = `%23${hashtag}`;
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
    console.log("FUNCTION HIT", params);
    const twitterReq = {
      url: `https://api.twitter.com/1.1/search/tweets.json?q=` + params,
      method: "GET"
    };
    console.log(twitterReq.url);

    const response = await api(twitterReq);
    const { statuses } = response.data; // twitter api give twitter response in statues key
    let tweets = statuses;
    if (statuses.length && filters && typeof filters === "object") {
      console.log("if check hit");
      tweets = filterArrayOfObjects(statuses, filters);
    }
    console.log(tweets);

    return res.status(200).json({ tweets });
  } catch (err) {
    return res.status(400).json({ errors: "somting went wrong :/", err });
  }
};
