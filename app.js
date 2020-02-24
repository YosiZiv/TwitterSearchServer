require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const api = require("./api/api");
const app = express();

//  Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(cors());
app.use("/api", api);
//  API
// app.use("/api", api);

// Global error handler
// process.on('unhandledRejection', ex => {
//   throw ex;
// });

const port = process.env.PORT || 4000;
app.use(express.static("public/build"));
app.get("*", (req, res) => {
  if (req.path === "/api") {
    console.log("Check!223");
    next();
  }
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
