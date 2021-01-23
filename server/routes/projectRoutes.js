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

  app.delete(`/api/project`, async (req, res) => {
    const deleteProject = await Project.delete(req.body);
    return res.status(202).send({
      error: false,
      deleteProject,
    });
  });
};

//Add method in here to delete, add a button that will delete a project, wire button to call function
//Project service, project route and mongodb

// http://localhost:5000/api/project
