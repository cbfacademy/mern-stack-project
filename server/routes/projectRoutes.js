const mongoose = require('mongoose');
const Project = mongoose.model('projects');


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
};


// http://localhost:5000/api/project