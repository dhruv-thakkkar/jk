const apiResponse = require("../helpers/apiResponse");
const PackageModel = require("../models/PackageModel");
const AmenitiesModel = require("../models/AmenitiesModel");
const PackageImagesModel = require("../models/PackageImagesModel");
const PackageItinerariesModel = require("../models/PackageItinerariesModel");
const { ObjectId } = require("mongodb"); // or ObjectID
const packageServices = require("../services/PackageServices")

exports.addPackage = [
  async (req, res) => {
    let reqParam = req.body;
    let package = new PackageModel();

    package.package_title = reqParam.package_title;
    package.cateogory_ids = reqParam.cateogory_ids;
    package.country_id = reqParam.country_id;
    package.stars = reqParam.stars;
    package.short_desc = reqParam.short_desc;
    package.long_desc = reqParam.long_desc;
    package.amenities_id = reqParam.amenities_id;
    package.price = reqParam.price;
    package.days_count = reqParam.days_count;
    package.nights_count = reqParam.nights_count;
    package.sortOrder = reqParam.sortOrder;
    package.save();
    return apiResponse.successResponseWithData(res, "Package added.", package);
  },
];


exports.addPackageItinerary = [
  async (req, res) => {
    let reqParam = req.body;
    let data = reqParam.data;
    //ObjectId(reqUser._id)
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        let packageItinerary = new PackageItinerariesModel();
        packageItinerary.package_id = reqParam.package_id;
        packageItinerary.day = data[i].day;
        packageItinerary.summary = data[i].summary;
        packageItinerary.save();
      }
    }
    return apiResponse.successResponseWithData(res, "Package Itinerary added.", "ASd");
  },
];


exports.addPackageImages = [
  async (req, res) => {
    let reqParam = req.body;
    let images = reqParam.package_images;
    if (images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        let packageImages = new PackageImagesModel();
        packageImages.package_id = reqParam.package_id;
        packageImages.image_url = images[i];
        packageImages.save();
      }
    }
    return apiResponse.successResponseWithData(res, "Package Itinerary added.", reqParam);
  },
];

exports.getPackageById = [
  async (req, res) => {
    try {
      const reqBody = req.body;
      let ans = "";
      if (reqBody.package_id) {
        ans = await packageServices.FindPackageById((reqBody));
        let ammenities = []
        if (ans[0].amenities) {
          for (key in ans[0].amenities) {
            ammenities.push(ans[0].amenities[key].amenities_id)
          }
        }
        let sAmen = await AmenitiesModel.find({ "_id": { "$in": ammenities } });
        ans[0].selectedAmenities = sAmen; //adding selected amenites as an array. 
      } else if (reqBody.category_id) {
        ans = await packageServices.FindPackageById((reqBody));
      }
      return apiResponse.successResponseWithData(res, ans);
    } catch (err) {
      console.log(err)
      return apiResponse.ErrorResponse(res, err);
    }
  }
] 
