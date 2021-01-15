const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
  project_id: Number,
  client_name: String,
  project_name: String,
  project_description: String,
  location: Object,
  date: String,
  contact_information: String,
  skills: Array,
});

mongoose.model("projects", projectSchema);
