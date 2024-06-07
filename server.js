const express = require("express");
const app = express();
const cors = require("cors");
const app = require("./app");
const port = 3001;
const host = "127.0.0.1";
const mongoose = require("mongoose");

// middlewares

app.use(cors()); // unblock browser restrictions
app.use(express.json()); // requests and responses are happening in json format

const uri =
  "mongodb+srv://jayaweeraspn:259eamFKZE2vlA2v@cluster0.z1pis1a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error connecting to Database");
  }
};

connect();

const server = app.listen(port, host, () => {
  console.log(`Node server is listening to ${server.address().port}`);
});
