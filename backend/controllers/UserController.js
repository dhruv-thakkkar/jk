const apiResponse = require("../helpers/apiResponse");
const UserModel = require("../models/UserModel");
const { ObjectId } = require("mongodb"); // or ObjectID

exports.editProfile =[
  async (req, res) => {
    try {
      const reqBody = req.body;
      const reqUser = req.user;
  
      const body = {};
      let ans = await UserModel.UpdateById(ObjectId(reqUser._id),reqBody);
      body.msg = "User updated successfully";
      body.data = ans;
      return apiResponse.successResponseWithData(res, body);
    } catch (err) {
      return apiResponse.ErrorResponse(res, err);
    }
  }
] 
