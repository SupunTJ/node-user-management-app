const express = require("express");
const app = express();
const cors = require("cors");
const controller = require("./controller");

app.use(
  express.urlencoded({
    // encoding the html form data to arrays/objects
    extended: true, // use to get nested objects
  })
);

// apis
app.get("/users", (req, res) => {
  controller.getAllUsers((users) => {
    res.send(users);
  });
});

app.get("/user", (req, res) => {
  const id = req.query.id;
  controller.getUserById(id, (user) => {
    res.send(user);
  });
});

module.exports = app;
