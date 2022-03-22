var mongoose = require("mongoose");
const { ObjectId } = require("mongodb"); // or ObjectID


const Amenities = new mongoose.Schema(
  {
    title: { type: String, required : true },
    code: { type: String, required : true },
    summary: { type: String, required : true },
    sortOrder: { type: Number, default: 0 },
    status: { type: Number, default: 1 }, //0,1,2
  },
  { timestamps: true }
);

module.exports = mongoose.model("amenities", Amenities);