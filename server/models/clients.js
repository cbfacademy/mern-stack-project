const mongoose = require("mongoose");
const { Schema } = mongoose;

const clientSchema = new Schema({
  client_id: Number,
  first_name: String,
  last_name: String,
  company_name: String,
  email: String,
  username: String,
  password: String
});

mongoose.model("clients", clientSchema);
