const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  id: Number,
  questionText: String,
  type: String,
  options: [{Text:String, Target: Number}],
  Text: String,
});

mongoose.model("guide", userSchema, "guide");
