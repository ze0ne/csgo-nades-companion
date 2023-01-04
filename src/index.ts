const express = require("express");
const app = express();
const axios = require("axios");

const path = require("path");

import { Nade } from "./models/nade.model";

const URL_API = "https://www.csgonades.com/_next/data/FQEgrgzz1oH2o1nxVzA5A/maps/";
const URL_NADES = URL_API + "/nades/map/";

const port = 3000;
app.use("/", express.static(path.join(__dirname, "www")));
app.use("/data", express.static(path.join(__dirname, "data")));

// sendFile will go here
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/www/index.html"));
});

app.get("/api/nades/inferno", function (req, res) {
  res.json("/data/maps/inferno.json");
});

app.listen(port);
console.log("Server started at http://localhost:" + port);

