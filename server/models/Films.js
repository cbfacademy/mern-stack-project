const mongoose = require('mongoose');
const { Schema } = mongoose;

const filmsSchema = new Schema({
  title: String,
  release_year: Number,
  actors: [String]
});

mongoose.model('films', filmsSchema);
