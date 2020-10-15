const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  lastname: String,
  firstname: String,
  address: String,
  phone: String,
  favoriteAnimal: [{
    type: Schema.Types.ObjectId, ref: "Animal",}],
  sponsoring:  [{
    type: Schema.Types.ObjectId, ref: "Animal",}],
  adoption:  [{
    type: Schema.Types.ObjectId, ref: "Animal",}],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
