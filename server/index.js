const express = require("express");
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.post("/", (req, res) => {
  console.log(req.body);
  //   res.location("back");
  res.redirect("back");
});

module.exports = server;
