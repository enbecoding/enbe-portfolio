const express = require("express");
const cors = require("cors");
const app = express();

const {
  getHomepage,
  getCSS
} = require("./server/controller/controller.js");

app.use(cors());
app.use(express.json());
app.use(express.static("client"));

app.get("/", getHomepage);
app.get("/css", getCSS);


app.listen(4000, console.log("Server running on 4000"));
