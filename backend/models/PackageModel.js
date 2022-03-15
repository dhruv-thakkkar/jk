var mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema(
  {
    package_title: { type: String, required: true },
    cateogory_ids: { type: Array, required: true, default: [] },
    country_id: { type: Number, required: true },
    stars: { type: Number, required: false },
    short_desc: { type: String, required: true },
    long_desc: { type: String, required: true },
    amenities_id: { type: Array, required: true, default: [] },
    price: { type: Number, required: true },
    days_count: { type: Number, required: true },
    nights_count: { type: Number, required: true },
    sortOrder: { type: Number, default: 0 },
    status: { type: Number, default: 1 }, //0,1,2
  },
  { timestamps: true }
);

module.exports = mongoose.model("package", PackageSchema);
