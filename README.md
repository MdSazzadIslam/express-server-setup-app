# express-server-setup-app
Setting up a Node.js Express server

const express = require("express"); // web application framework for node js
const bodyParser = require("body-parser"); // it extract the entire body portion of an incoming request
const morgan = require("morgan"); // http request middleware for node js
const cors = require("cors"); // it's needed because it allow servers to specify not only who can access the resources but also how they can be accessed

