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
    clientId: "xxxxxxxxxxx",
    clientSecret: "xxxxxxxxxx",
  },
});

transporter.set("oauth2_provision_cb", (user, renew, callback) => {
  let accessToken = userTokens[user];
  if (!accessToken) {
    return callback(new Error("Unknown user"));
  } else {
    return callback(null, accessToken);
  }
});

server.get("/", (req, res) => {
  console.log(req.body);
  //   res.location("back");
  //   transporter.sendMail({
  //     from: "xxxxxxxxxxxx",
  //     to: "xxxxxxxxxxxxx",
  //     subject: "Message",
  //     text: "I hope this message gets through!",
  //     auth: {
  //       user: "xxxxxxxxxxxx",
  // refreshToken: '1/XXxXxsss-xxxXXXXXxXxx0XXXxxXXx0x00xxx',
  // accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x',
  // expires: 1484314697598
  // },
  //   });
  res.send("connected");
});

module.exports = server;
