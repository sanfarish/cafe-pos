const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");

const api = require("./routes");

const notFound = require("./middlewares/notFoundHandler");
const errors = require("./middlewares/errorsHandler");

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/favicon.ico", express.static("public/favicon.ico"));
app.use("/api", api);

app.use(errors);
app.use("*", notFound);

module.exports = app;
