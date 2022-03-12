var express = require("express");
var authRouter = require("../routes/auth");
var userRouter = require("../routes/userRouter");
var categoriesRoute = require("../routes/categoriesRoute");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");


const port = 3000;

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/categories", categoriesRoute);

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
