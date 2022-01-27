const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp-relay.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_CLIENT_ADDRESS, // generated ethereal user
    pass: process.env.EMAIL_CLIENT_SECRET // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false
  }
});

module.exports = {
  secretKey: process.env.MONGODB_SECRET,
  mongoUrl: process.env.MONGODB_URI,
  transporter
};
