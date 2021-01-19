const mongoose = require("mongoose");
const Client = mongoose.model("clients");

module.exports = (app) => {
  // Get's all clients/users
  app.get(`/api/client`, async (req, res) => {
    const clients = await Client.find(); // calling function to get the data
    return res.status(200).send(clients);
  });

  //POST - add a new clients/users
  app.post(`/api/client`, async (req, res) => {
    const newClient = await Client.create(req.body); // contain anything on the form
    return res.status(201).send({
      error: false,
      newClient,
    });
  });

  // POST - login functionality
  app.post(`/api/login`, async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const clients = await Client.find({ username, password }); // calling function to get the data
    if (clients.length >= 1) {
      return res.status(200).send(clients);
    } else {
      return res.status(400).send(clients);
    }
  });
};

// http://localhost:5000/api/client
