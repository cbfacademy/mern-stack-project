const mongoose = require("mongoose");
const { Schema } = mongoose;

const clientSchema = new Schema({
  client_id: Number,
  first_name: String,
  last_name: String,
  company_name: {
    type: String,
    required: true,
  },
  company_logo: {
    type: String,
    data: Buffer,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  // projects: {
  //   type: Schema.Types.ObjectId,
  //   ref: "projects" },
});

mongoose.model("clients", clientSchema);
