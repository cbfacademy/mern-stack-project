const mongoose = require('mongoose');
const Film = mongoose.model('films');

module.exports = (app) => {
  app.get(`/api/films/:pageId/`, async (req, res) => {
    // Add pagination
    const films = await Film.find();
    return res.status(200).send(films);
  });

  //Film title search /api/films/title?keyword=foo
  app.get(`/api/film/title`, async (req, res) => {
    const films = await Film.find({ 'title': req.query.keyword });
    return res.status(200).send({
      error: false,
      films,
    });
  });

  // Film acttor search
  app.get(`/api/film/actor`, async (req, res) => {
    const { id } = req.params;

    const film = await Film.findBy(req.body);

    return res.status(202).send({
      error: false,
      film,
    });
  });

  // Film create
  app.post(`/api/films`, async (req, res) => {
    const film = await Film.create(req.body);
    return res.status(201).send({
      error: false,
      film,
    });
  });

  // FIlm delete
  app.delete(`/api/films/:id`, async (req, res) => {
    const { id } = req.params;

    const film = await Film.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      film,
    });
  });
};
