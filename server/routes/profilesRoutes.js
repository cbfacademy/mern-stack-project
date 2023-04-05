const { ObjectId } = require("mongodb");

/**
 * @param {import('express').Express} app - The Express instance
 * @param {import('mongodb').Db} db - The Db instance.
 */
const profilesRoutes = (app, db) => {
  /**
   * Retrieves the profiles collection from Mongo db
   * @returns Collection<Document>
   */
  const profilesCollection = () => db.collection("profiles");

  /**
   * Middleware handler for GET requests to /api/profiles path
   */
  app.get(`/api/profiles`, async (req, res) => {
    try {
      // Waits for asynchronous `find()` operation to complete and converts results to array
      const profiles = await profilesCollection().find({}).toArray();

      return res.status(200).send(profiles);
    } catch (e) {
      return res
        .status(500)
        .send(`Error occurred while retrieving profiles: ${e}`);
    }
  });

  /**
   * Middleware handler for POST requests to /api/profiles path
   */
  app.post(`/api/profiles`, async (req, res) => {
    try {
      const profile = await profilesCollection().insertOne(req.body);

      return res.status(201).send({
        error: false,
        profile,
      });
    } catch (e) {
      return res
        .status(500)
        .send(`Error occurred while creating profile: ${e}`);
    }
  });

  /**
   * Middleware handler for PUT requests to /api/profiles/:id path
   */
  app.put(`/api/profiles/:id`, async (req, res) => {
    try {
      // Captures target id from URL
      const { id } = req.params;
      // Builds query matching `_id` field value matching captured id. `ObjectId()` is needed to convert string value to correct type
      const query = { _id: new ObjectId(id) };
      const profile = await profilesCollection().replaceOne(query, req.body);

      return res.status(202).send({
        error: false,
        profile,
      });
    } catch (e) {
      return res
        .status(500)
        .send(`Error occurred while updating profilee: ${e}`);
    }
  });

  /**
   * Middleware handler for DELETE requests to /api/profiles/:id path
   */
  app.delete(`/api/profiles/:id`, async (req, res) => {
    try {
      const { id } = req.params;
      const query = { _id: new ObjectId(id) };
      const profile = await profilesCollection().deleteOne(query);

      return res.status(202).send({
        error: false,
        profile,
      });
    } catch (e) {
      return res
        .status(500)
        .send(`Error occurred while deleting profiles: ${e}`);
    }
  });
};

module.exports = profilesRoutes;
