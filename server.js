var path = require("path");

require("dotenv/config");

var express = require("express");

var apiRouter = require("./routes/api");
var usersRouter = require("./routes/users");
var winesRouter = require("./routes/wine");
var reviewRouter = require("./routes/review");

var server = express();

// Functional curling style of loading configuration
require("./config/db");
require("./config/global")(server);

server.use("/api", apiRouter);
server.use("/users", usersRouter);
server.use("/wines", winesRouter);
server.use("/review", reviewRouter);

// server.get('*', (req, res) => {
//   console.log("get * returning index URL for", req.url)
//   res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
// });

// server.use('/wines', isAuthenticated, winesRouter)

// catch 404 and forward to error handler
server.use(function (req, res, next) {
  // console.log(req.url)
  console.log("404 handler returning index.html");
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  // next(createError(404));
});

// error handler
server.use(function (err, req, res, next) {
  // console.log(req.url)
  // console.log("general error handler returning index.html")
  // res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = server;
