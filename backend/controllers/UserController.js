const apiResponse = require("../helpers/apiResponse");
const UserModel = require("../models/UserModel");
const { ObjectId } = require("mongodb"); // or ObjectID

exports.editProfile = async (req, res) => {
  try {
    const reqBody = req.body;
    const reqUser = req.user;

    const body = {};
    let ans = await UserModel.findOneAndUpdate(
      { _id: ObjectId(reqUser._id) },
      { $set: reqBody },
      {new: true}
    );
    body.msg = "User updated successfully";
    body.data = ans;
    return apiResponse.successResponseWithData(res, body);
  } catch (err) {
    console;
    return apiResponse.ErrorResponse(res, err);
  }
};
