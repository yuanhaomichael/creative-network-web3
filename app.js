var createError = require("http-errors");
var express = require("express");
var path = require("path");
const cors = require("cors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");
var FileStore = require("session-file-store")(session);

var passport = require("passport");
var authenticate = require("./authenticate");
var config = require("./config");

const mongoose = require("mongoose");
const User = require("./models/user");
const Creatives = require("./models/creatives");
const Ideas = require("./models/ideas");
const Marketers = require("./models/marketers");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var creativesRouter = require("./routes/creativesRouter");
var ideasRouter = require("./routes/ideasRouter");
var marketersRouter = require("./routes/marketersRouter");

const url = config.mongoUrl;
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

connect.then(
  (db) => {
    console.log("Connected correctly to server");
  },
  (err) => {
    console.log(err);
  }
);

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./client/build")));

app.use(passport.initialize());

app.use("/api/", indexRouter);

app.use("/api/users", usersRouter);

app.use("/api/creatives", creativesRouter);
app.use("/api/ideas", ideasRouter);
app.use("/api/marketers", marketersRouter);

app.get("/", handleRender);
app.get("*", handleRender);

function handleRender(req, res) {
  res.sendFile(__dirname + "/client/build/index.html");
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(cors());

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
