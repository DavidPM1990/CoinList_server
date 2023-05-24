require("dotenv").config();

require("./db");

const express = require("express");

const app = express();

require("./config")(app);

// Routing

// const userRoutes = require('./routes/user.routes');
// app.use('/api', userRoutes);

require("./routes/index.js")(app);


require("./error-handling")(app);

module.exports = app;
