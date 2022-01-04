const apiResponse = require("../helpers/apiResponse");

exports.login = (req, res) => {
  try {
    const userData = { "a" : "asd" }
    return apiResponse.successResponseWithData(res,"Login Success.", userData);
    console.log("You are here..")
  } catch (err) {
    console.log(err)
  }
};