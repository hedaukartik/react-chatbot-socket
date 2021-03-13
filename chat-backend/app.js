const express = require("express");
const morgan = require("morgan"); //for development purpose to get the routes requested in console
const cookieParser = require("cookie-parser"); //Parse Cookie header and populate req.cookies
const bodyParser = require("body-parser");
const http = require("http");

//app
const app = express();

//create HTTP server
const server = http.createServer(app);

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

/**
 * Listen on provided port, on all network interfaces.
 */
const port = process.env.PORT || 8000;
server.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
