const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

const { randomSeries, ratingSeries, genreSeries } = require("./functions");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/random", (req, res) => {
  res.json(randomSeries());
});

app.get("/list", (req, res) => {
  res.sendFile(__dirname + "/web-series/index.json");
});

app.get("/rating/:id1", (req, res) => {
  res.json(ratingSeries(req.params.id1));
});

app.get("/genre/:genre", (req, res) => {
  res.json(genreSeries(req.params.genre));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Sever is up and running !!");
});
