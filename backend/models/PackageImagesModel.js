var mongoose = require("mongoose");
const { ObjectId } = require("mongodb"); // or ObjectID


const PackageImages = new mongoose.Schema(
  {
    package_id: { type: mongoose.Schema.ObjectId, required: true },
    image_url: { type: String, required : true },
    alt_text: { type: String, required : false },
    sortOrder: { type: Number, default: 0 },
    status: { type: Number, default: 1 }, //0,1,2
  },
  { timestamps: true }
);

module.exports = mongoose.model("package_images", PackageImages);