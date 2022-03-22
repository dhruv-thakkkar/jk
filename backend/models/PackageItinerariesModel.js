var mongoose = require("mongoose");
const { ObjectId } = require("mongodb"); // or ObjectID


const PackageItinerary = new mongoose.Schema(
  {
    package_id: { type: mongoose.Schema.ObjectId, required: true },
    day: { type: Number, required : true },
    title: { type: String, required : false },
    summary: { type: String, required : true },
    status: { type: Number, default: 1 }, //0,1,2
  },
  { timestamps: true }
);

module.exports = mongoose.model("package_itineraries", PackageItinerary);