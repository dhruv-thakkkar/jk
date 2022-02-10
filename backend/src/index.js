var express = require("express");
var authRouter = require("../routes/auth");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = 3000;

var app = express();

app.use(bodyParser.json());

app.use("/api/v1/auth", authRouter);

const MONGODB_URL = "mongodb://127.0.0.1:27017/jk";
mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to %s", MONGODB_URL);
  })
  .catch((err) => {
    console.error("App starting error:", err.message);
    process.exit(1);
  });
var db = mongoose.connection;

/* app.use("/api/v1/auth/login", function (req, res) {
  res.send('GET request to homepa1ge');
}); */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
module.exports = app;
