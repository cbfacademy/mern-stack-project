const mongoose = require("mongoose");
const Project = mongoose.model("projects");

module.exports = (app) => {
  // Get's all the projects
  app.get(`/api/project`, async (req, res) => {
    const projects = await Project.find(); // calling function to get the data
    return res.status(200).send(projects);
  });

  //POST - add a new project
  app.post(`/api/project`, async (req, res) => {
    const myProject = await Project.create(req.body); // contain anything on the form
    return res.status(201).send({
      error: false,
      myProject,
    });
  });

  // CHECK THIS!!!!

  //route that takes in the id of an existing Product and creates a Review for it

  // app.post("/client/:id", function (req, res) {
  //   db.Project.create(req.body)
  //     .then(function (dbProject) {
  //       return db.Client.findOneAndUpdate(
  //         { _id: req.params.id },
  //         { owner: dbProject._id },
  //         { new: true }
  //       );
  //     })
  //     .then(function (dbClient) {
  //       res.json(dbClient);
  //     })
  //     .catch(function (err) {
  //       res.json(err);
  //     });
  // });

  // app.get("/client/:id", function (req, res) {
  //   db.Client.findOne({ _id: req.params.id })
  //     .populate("owner")
  //     .then(function (dbClient) {
  //       res.json(dbProject);
  //     })
  //     .catch(function (err) {
  //       res.json(err);
  //     });
  // });


  // app.delete(`/api/project`, async (req, res) => {
  //   const deleteProject = await Project.delete(req.body);
  //   return res.status(202).send({
  //     error: false,
  //     deleteProject,
  //   });
  // });
};

//Add method in here to delete, add a button that will delete a project, wire button to call function
//Project service, project route and mongodb

// http://localhost:5000/api/project
