const mongoose = require("mongoose");
const { Schema } = mongoose;
// const bcrypt = require("bcrypt");

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
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

clientSchema.pre("save", function (next) {
  // Check to see if document is new or a new password has been set
  if (this.isNew || this.isModified("password")) {
    // Saving reference to this because of changing scopes
    // const document = this;
    // bcrypt.hash(document.password, saltRounds, function (err, hashedPassword) {
    //   if (err) {
    //     next(err);
    //   } else {
    //     document.password = hashedPassword;
    //   }
    // });
  } else {
    next();
  }
});

module.exports = mongoose.model("clients", clientSchema);
