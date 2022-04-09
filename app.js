const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

let mongoDB = process.env.MONGO_URL;

mongoose.connect(mongoDB).then(() => {
  console.log("connected");
  const server = app.listen(8080, () => console.log("listening"));
});

const router = require("./routes/index.js");
app.use("/api/v1", router);
