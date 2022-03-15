const apiResponse = require("../helpers/apiResponse");
const PackageModel = require("../models/PackageModel");
const { ObjectId } = require("mongodb"); // or ObjectID

module.exports = {
  FindPackageById(id) {
    console.log("inside...");

    let result = PackageModel.aggregate([
      {
        $match: {
          _id: new ObjectId("623045394d9fe5abbe9cae0a"),
        },
      },
      {
        $lookup: {
          from: "package_images",
          localField: "_id",
          foreignField: "package_id",
          as: "images",
        },
      },
      {
        $lookup: {
          from: "package_itineraries",
          localField: "_id",
          foreignField: "package_id",
          as: "itineraries",
        },
      },
      {
        $lookup: {
          from: "countries",
          localField: "country_id",
          foreignField: "_id",
          as: "country",
        },
      },
    ]);
    return result;
  },
};
