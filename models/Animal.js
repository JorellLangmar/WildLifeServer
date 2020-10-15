const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animalSchema = new Schema({
  name: String,
  profileImage: String,
  age: Number,
  specie: String,
  description: String,
  endangered: {
    type: String,
    enum : ['Critical', 'Vulnerable', 'Least concerned'],
},
  adopted: Boolean,
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;