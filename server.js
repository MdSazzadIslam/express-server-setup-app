const express = require("express"); // web application framework for node js
const bodyParser = require("body-parser"); // it extract the entire body portion of an incoming request
const morgan = require("morgan"); // http request middleware for node js
const cors = require("cors"); // it's needed because it allow servers to specify not only who can access the resources but also how they can be accessed
const app = express();

app.use(morgan("dev"));
app.use(express.static("client"));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Running app on port " + port);
});

//404
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err, message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
