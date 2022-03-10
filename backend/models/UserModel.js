var mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	firstName: {type: String, required: true},
	lastName: {type: String},
	email: {type: String, required: true},
	password: {type: String, required: true},
	status: {type: Number, required: true, default: 1} //0,1,2
}, {timestamps: true});

UserSchema.UpdateById = function(id,body){
	UserModel.findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: body },
        {new: true}
      );
}

module.exports = mongoose.model("users", UserSchema);

