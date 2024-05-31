const { connectToDB } = require("./db.js");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const chalk = require("chalk");
const personRoutes = require("./router/personRoutes.js");

const dotenv = require("dotenv").config()
console.log(dotenv)
app.use(bodyParser.json());
const myMiddlewareRequestLogging = function (req, res, next) {
  console.log(chalk.blue("Hello world!"));
  console.log(new Date().toLocaleString());
  next();
};
const url = "mongodb://127.0.0.1:27017/helloworld";

connectToDB(url);

app.use("/person", myMiddlewareRequestLogging, personRoutes);

app.listen(8080);
