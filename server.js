// Dependencies for EXPRESS
const EXPRESS = require("express");
//const HTTP = require("http");

// Initializing server
const APP = EXPRESS();
const PORT = 3000;

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
	res.send("HOT RESTURANT");
});

//APP.get("/", function(req, res) {
//	res.send("HOT RESTURANT");
//};

//APP.get("/", function(req, res) {
//	res.send("HOT RESTURANT");
//};

// Listener
APP.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});
