var express = require("express");
var router = express.Router();
var config = require("../config");
const cors = require("./cors");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router
  .route("/send")
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .post(cors.corsWithOptions, function (req, res, next) {
    try {
      const mailOptions = {
        from: req.body.email, // sender address
        to: [process.env.EMAIL_CLIENT_ADDRESS, "tehseen.siddiq@gmail.com"], // list of receivers
        subject: "Client Inquiry " + req.body.name, // Subject line
        html: `
        <div>
        <p>Name: ${req.body.name}</p> 
        <p>Phone number: ${req.body.phone}</p> 
        <p>Content: ${req.body.message}</p> 
        </div>`
      };

      config.transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.log({ info, err });
          res.status(500).send({
            success: false,
            message: "Something went wrong. Try again later"
          });
          next(err);
        } else {
          console.log({ info, err });

          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({
            success: true,
            message: "Thanks for contacting us. We will get back to you shortly"
          });
        }
      });
    } catch (error) {
      console.log({ error });

      res.status(500).send({
        success: false,
        message: "Something went wrong. Try again later"
      });
      next(error);
    }
  });

module.exports = router;
