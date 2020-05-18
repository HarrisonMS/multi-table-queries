const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const SchemeRouter = require("./schemes/scheme-router.js");

const server = express();

server.use(morgan("dev"));
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api/schemes", SchemeRouter);
server.get("/", (req, res) => {
  res.send("<h3>Its workinggg!!!!!!!</h3>");
});

module.exports = server;
