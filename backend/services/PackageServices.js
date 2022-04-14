const apiResponse = require("../helpers/apiResponse");
const PackageModel = require("../models/PackageModel");
const { ObjectId } = require("mongodb"); // or ObjectID

module.exports = {
  FindPackageById(reqBody) {
    let pipeline = [];
    if (reqBody.package_id) {
      pipeline.push({
        $match: {
          _id: new ObjectId(reqBody.package_id),
        },
      });
    }
    if (reqBody.category_id) {
      pipeline.push({
        $match: {
          cateogory_ids: new ObjectId(reqBody.category_id),
        },
      });
    }
    if (reqBody.random) {
      pipeline.push({
        $sample: { size: reqBody.random },
      });
    }

    pipeline.push(
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
      {
        $lookup: {
          from: "package_amenities",
          localField: "_id",
          foreignField: "package_id",
          as: "amenities",
        },
      }
    );
    let result = PackageModel.aggregate(pipeline);
    return result;
  },
};
