const mongoose = require("mongoose");
const Client = mongoose.model("clients");

//LOGIN

// POST - login functionality
module.exports = (app) => {
  app.post("/api/login", async (req, res) => {
    const username = req.body.clientUsername;
    const password = req.body.clientPassword;
    console.log(username, password);
    console.log(req.body);

    const clients = await Client.find({ username, password }); // calling function to get the data
    if (clients.length === 1) {
      return res.status(200).send({ token: "1234" });
    } else {
      return res.status(400).send({ failure: "failure" });
    }
  });
};

// http://localhost:5000/api/client

// http://localhost:5000/api/login
