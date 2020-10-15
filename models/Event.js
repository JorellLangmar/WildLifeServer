const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: String,
  description: String,
  category: String,
  date: Date,
  animalId:  {
    type: Schema.Types.ObjectId, ref: "Animal",},

});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;