require("dotenv").config();

const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Connect to the database
MongoClient.connect(process.env.DATABASE_CONNECTION_STRING)
  .then((client) => {
    const db = client.db(process.env.MONGO_DB_NAME);
    // IMPORT YOUR API ROUTES HERE
    // Below is just an example. Don't forget to delete it.
    // It's importing and using everything from the profilesRoutes.js file and also passing app as a parameter for profileRoutes to use
    require("./routes/profilesRoutes")(app, db);

    app.listen(PORT, () => {
      console.log(`API running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error: ", err);
  });