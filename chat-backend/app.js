const express = require("express");
const morgan = require("morgan"); //for development purpose to get the routes requested in console
const cookieParser = require("cookie-parser"); //Parse Cookie header and populate req.cookies
const bodyParser = require("body-parser");
const http = require("http");
const socket = require("socket.io");
const chatbotService = require("./service/chatbotService");
const index = require("./routes/index");

//app
const app = express();

//test app is working
app.use(index);

//create HTTP server
const server = http.createServer(app);

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

//train the AI
chatbotService.trainChatBotIA();

/**
 * Listen on provided port, on all network interfaces.
 */
const port = process.env.PORT || 8000;
server.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

//socket connection
const io = socket(server);
chatbotService.connectWebSocket(io);
