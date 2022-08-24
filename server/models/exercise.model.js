const mongoose = require("mongoose");

const exercisesSchema = mongoose.Schema({
  bodyPart: { type: String },
  equipment: { type: String },
  gifUrl: { type: String },
  id: { type: String },
  name: { type: String },
  target: { type: String },
});

module.exports = new mongoose.model("exercises", exercisesSchema);
