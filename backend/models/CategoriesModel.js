var mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema({
	category_name: {type: String, required: true},
	sortOrder: {type: String,default: 1},
	status: {type: Number, default: 1} //0,1,2
}, {timestamps: true});

CategoriesSchema.UpdateById = function(id,body){
	CategoriesModel.findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: body },
        {new: true}
      );
}

module.exports = mongoose.model("categories", CategoriesSchema);

