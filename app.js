const express = require("express");
const app = express();
const cors = require("cors");

// middlewares

app.use(cors()); // unblock browser restrictions

app.use(
  express.urlencoded({
    // encoding the html form data to arrays/objects
    extended: true, // use to get nested objects
  })
);

app.use(express.json()); // requests and responses are happening in json format

module.exports = app;
