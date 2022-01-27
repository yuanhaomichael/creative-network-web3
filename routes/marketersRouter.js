const express = require("express");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
const cors = require("./cors");
// var authenticate = require("../authenticate");

const Marketers = require("../models/marketers");

const marketersRouter = express.Router();
marketersRouter.use(bodyParser.json());

/**
 * A schema for operations on the entire marketers database.
 * @GET: View all marketers in the database.
 * @POST: Register a new marketers.
 */
marketersRouter
  .route("/")
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })

  .get(cors.cors, (req, res, next) => {
    Marketers.find({})
      .populate("userAccount")
      .then(
        (marketers) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(marketers);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  .post(cors.corsWithOptions, (req, res, next) => {
    Marketers.create(req.body)
      .then(
        (marketers) => {
          console.log("Marketers Created", marketers);
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(marketers);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

module.exports = marketersRouter;
