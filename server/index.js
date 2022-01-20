require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// IMPORT YOUR SCHEMAS HERE
require("./models/Profiles"); //This is just an example. Don't forget to delete this

const app = express();

// This is where your API is making its initial connection to the database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
});

app.use(bodyParser.json());

// IMPORT YOUR API ROUTES HERE
// Below is just an example. Don't forget to delete it. 
// It's importing and using everything from the profilesRoutes.js file and also passing app as a parameter for profileRoutes to use
require("./routes/profilesRoutes")(app); 

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
