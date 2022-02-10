const mongoose = require("mongoose");
const { Schema } = mongoose;
const animalSchema = new Schema({
  collarid: {
    type: String,
  },
  nickname: {
    type: String,
  },
  breed_name: {
    type: String,
  },
  gender: {
    type: String,
  },
  category: {
    type: String,
  },
  age: {
    type: String,
  },
});
module.exports = mongoose.model("animal", animalSchema);
