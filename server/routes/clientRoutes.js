const mongoose = require("mongoose");
const Client = mongoose.model("clients");


module.exports = (app) => {
  // GET - get clients/users
  app.get("/api/client", async (req, res) => {
    const clients = await Client.find(); 
    return res.status(200).send(clients);
  });

  //POST - add a new clients/users
  app.post("/api/client", async (req, res) => {
    const newClient = await Client.create(req.body); 
    return res.status(201).send({
      error: false,
      newClient,
    });
});

  // //POST route to register a user
  // app.post('/api/client', function(req, res) {
  //   const { email, username, password } = req.body;
  //   const user = new user({ email, username, password });
  //   user.save(function(err) {
  //     if (err) {
  //       res.status(500)
  //         .send("Error registering new user please try again.");
  //     } else {
  //       res.status(200).send("Welcome to Experience!")
  //     }
  //   })
  // });
 

  //LOGIN

  // POST - login functionality
};

// http://localhost:5000/api/client
