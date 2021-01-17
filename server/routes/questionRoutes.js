const mongoose = require("mongoose");
const Question = mongoose.model("questions");

module.exports = (app) => {
  app.get(`/api/question`, async (req, res) => { 
    const question = await Question.find();
    return res.status(200).send(question);
  });
};