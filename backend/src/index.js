var express = require("express");
var authRouter = require("../routes/auth");
var app = express();
const port = 3000
//Route Prefixes

app.use('/api/v1/auth', authRouter);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
  })
module.exports = app;