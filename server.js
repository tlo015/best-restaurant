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

const RESERVATIONSS = [
    {
    routeName: "rogue",
    name: "Rogue",
    phone: "123-456-7890",
    email: "rogue@dog.com",
    uniqueID: 1
    },
    {    
    routeName: "storm",
    name: "Storm",
    phone: "098-765-4321",
    email: "storm@dog.com",
    uniqueID: 2
    },
    {
    routeName: "random",
    name: "Billy B",
    phone: "281-330-8004",
    email: "random@person.com",
    uniqueID: 3
    }
];

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

APP.get("/reserve", function(req, res) {
	res.json(RESERVATIONSS);
});

APP.get("/all", function(req, res) {
	res.json(RESERVATIONSS);
});

APP.get("/api/:reservations?", function(req, res) {
    const CHOSEN = req.params.RESERVATIONS;
    if (CHOSEN) {
      console.log(CHOSEN);
      for (var i = 0; i < RESERVATIONS.length; i++) {
        if (CHOSEN === RESERVATIONS[i].routeName) {
          res.json(RESERVATIONS[i]);
          return;
        }
      }

      return res.send("No reservations found");
    }
    return res.json(RESERVATIONS);
  });


APP.post("/api/new", function(req, res) {
	const NEWRESERVATIONS = req.body;

	console.log(NEWRESERVATIONS);
	RESERVATIONS.push(NEWRESERVATIONS);

	res.json(NEWRESERVATIONS);
});

// jQuery
// Name form data 
// Phone form data
// Email data
// uniqueID
//
// Dot notation to refer to key value pairs within object
// .val() capture the data
// .
//Listener
APP.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});


