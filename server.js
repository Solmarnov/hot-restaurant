const express =require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [];
const waitList = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
})

app.get("/api/waitlist", function(req, res) {
    return res.json();
})

app.post("/reserve", function(req, res) {
    console.log(req.body);
    const reservation = req.body;

    if (reservations.length > 5) {
        waitList.push(reservation);

        res.send("Sorry, we're fully booked. We've put you on our waiting list.")
      } else {
           
        reservations.push(reservation);

        res.send("Thanks for booking a table with us!");
      };
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

