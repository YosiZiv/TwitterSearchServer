const Axios = require("axios");
const { token } = require("./config/key");
// config axios to have token for twitter api on is every http request
const axios = Axios.create({
  headers: {
    authorization: token
  }
});
console.log(token);

exports.api = async ({ url, method, payload = null }) => {
  console.log(url, method, payload);
  let response;
  try {
    if (method === "GET") {
      response = await axios.get(url, payload);
      return response;
    } else {
      response = await axios.post(url, payload);
      return response;
    }
  } catch (err) {
    console.log(err);
  }
};
