const express = require("express");
const configViewEngine = require("./config/viewEngine.js");
const bodyParser = require("body-parser");
const initWebRoutes = require("./route/web.js");
const connectDB = require("./config/configdb.js");
const connectMongoDB = require("./config/configMongodb.js");
require('dotenv').config();

let app = express();

// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
configViewEngine(app);
initWebRoutes(app);

// Connect to both databases
connectDB(); // MySQL connection
connectMongoDB(); // MongoDB connection

let port = process.env.PORT || 6969;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});