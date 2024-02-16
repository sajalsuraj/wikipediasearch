const path = require("path");
const express = require("express");
const axios = require("axios");
const app = express(); // create express app

const API_URL =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&format=json&srlimit=50&srsearch=";
// add middlewares
app.use(express.static(path.join(__dirname, "", "build")));
app.use(express.static("public"));
app.use(express.static(__dirname));

app.get("/api/:searchValue", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}${req.params.searchValue}`);
    res.json(response.data);
  } catch (err) {
    res.send(err);
  }
});

app.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// start express server on port 5000
app.listen(3001, () => {
  console.log("server started on port 3001");
});
