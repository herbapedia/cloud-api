//Initiate package
require("dotenv").config();
const express = require("express");
const path = require('path');

const app = express();
app.use(express.json());

// Import all modulee
const plants = require("./routes/plants.js");
const auth = require("./routes/auth.js");
const locations = require("./routes/locations.js");

// Define Routes
app.use("/plants", plants);
app.use("/auth", auth);
app.use("/locations", locations);

// Serve model as a static file
// app.use("/model", middleware_user, express.static(path.join(__dirname, "model")))

const listEndpoints = require("express-list-endpoints"); // npm i express-list-endpoints
// console.log(listEndpoints(app))
app.listen(23450);
