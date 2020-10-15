const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animalSchema = new Schema({
  name: String,
  profileImage: String,
  age: String,
  specie: String,
  description: String,
  ConservationStatus: {
    type: String,
    enum : ['Critical', 'Vulnerable', 'Least Concerned', 'Near Threatened', 'Data Deficient', 'Endangered',],
},
gender: {
    type: String,
    enum : ['Male', 'Female',],
},
  adopted: Boolean,
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;