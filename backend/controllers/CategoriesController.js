const apiResponse = require("../helpers/apiResponse");
const CategoriesModel = require("../models/CategoriesModel");

exports.getCategories = [
  async (req, res) => {
    try {
      CategoriesModel.find({status: 1}).then((categories) => {
        return apiResponse.successResponseWithData(
          res,
          "Data found!",
          categories
        );
      }).catch(function(err){
        return apiResponse.notFoundResponse(res, "Data not found!");
      });
    } catch (err) {
      return apiResponse.ErrorResponse(res, err);
    }
  },
];
