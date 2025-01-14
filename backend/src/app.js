const express = require("express");
const compression = require('compression');
const cors = require("cors");
const helmet = require('helmet');
const logger = require("morgan");
const app = express();

const api = require("./routes");

const notFound = require("./middlewares/notFoundHandler");
const errors = require("./middlewares/errorsHandler");

app.use(logger("common"));
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(compression());
app.use(express.json());

app.use("/favicon.ico", express.static("public/favicon.ico"));
app.use("/api", api);

app.use(errors);
app.use("*", notFound);

module.exports = app;
