const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema({
  id: Number,
  questionText: String,
  type: String,
  options: [{Text:String, Target: Number}],
  Text: Array,
});

mongoose.model("questions", questionSchema);