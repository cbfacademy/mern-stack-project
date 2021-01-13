const mongoose = require("mongoose");
const Question = mongoose.model("questions");

module.exports = (app) => {
  app.get(`/api/question`, async (req, res) => { 
    const answer = await Question.find();
    return res.status(200).send(answer);
  });
};