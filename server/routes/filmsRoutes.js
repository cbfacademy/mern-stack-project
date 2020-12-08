const mongoose = require('mongoose');
const Film = mongoose.model('films');
const User = mongoose.model('users');

module.exports = (app) => {
  app.get(`/api/films/:pageId/`, async (req, res) => {
    const { pageId } = req.params
    i = 5
    y = i * (pageId - 1)
    const films = await Film.find().skip(y).limit(i);

    return res.status(200).send(films);
  });

  app.get(`/api/film/title`, async (req, res) => {
    const films = await Film.find({ "title": { "$regex": req.query.keyword }});

    return res.status(200).send({
      error: false,
      films,
    });
  });

  app.get(`/api/film/actor`, async (req, res) => {
    const { keyword } = req.query;
    const film = await Film.find({ 'actor': { "$regex": keyword }});

    return res.status(202).send({
      error: false,
      film,
    });
  });

  app.post(`/api/films`, async (req, res) => {
    const film = await Film.create(req.body);

    return res.status(201).send({
      error: false,
      film,
    });
  });

  app.delete(`/api/films/:filmId`, async (req, res) => {
    const { id } = req.params;
    const film = await Film.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      film,
    });
  });
};
