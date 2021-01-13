const mongoose = require("mongoose");
const Answer = mongoose.model("answers");

app.post(`/api/answer`, async (req, res) => { 
    const answer = await Answer.create(req.body);
    return res.status(201).send({
      error: false,
      answer,
    });
  });