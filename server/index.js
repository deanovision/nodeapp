const express = require("express");
const nodemailer = require("nodemailer");
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: `${process.env.USER}`,
    clientId: `${process.env.CLIENT_ID}`,
    clientSecret: `${process.env.CLIENT_SECRET}`,
    refreshToken: `${process.env.REFRESH_TOKEN}`,
    accessToken: `${process.env.ACCESS_TOKEN}`,
    expires: parseInt(process.env.EXPIRES, 10),
  },
});
server.get("/", (req, res) => {
  res.send("connected");
});

server.post("/", (req, res) => {
  transporter.sendMail({
    from: `${process.env.FROM}`,
    to: `${process.env.TO}`,
    subject: "Message",
    text: `<h1 style="color: blue;">Name: ${req.body["First Name"]}</h1>`,
    auth: {
      user: `${process.env.USER}`,
    },
  });
});

module.exports = server;
