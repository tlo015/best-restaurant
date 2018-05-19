// Dependencies for EXPRESS
const EXPRESS = require("express");
const BODYPARSER = require ("body-parser");
const PATH = require("path");
//const HTTP = require("http");

// Initializing server
const APP = EXPRESS();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
APP.use(BODYPARSER.urlencoded({ extended: true }));
APP.use(BODYPARSER.json());

//function handleRequests(request, response) {
//	const SERVER = http.createServer(handleRequests);
//};


//Data for Reservations
const RESERVATION = {
	name: "",
	phone: "",
	email: "",
	uniqueID: ""
};

// Routes
APP.get("/", function(req, res) {
	res.sendFile(PATH.join(__dirname, "home.html"));
});

APP.get("/view", function(req, res) {
	res.sendFile(PATH.join(__dirname, "tables.html"));
});

APP.get("/add", function(req, res) {
	res.sendFile(PATH.join(__dirname, "reserve.html"));
});

// Listener
APP.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});
