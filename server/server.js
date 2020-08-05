const express = require("express");
const cors = require("cors");
const parser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router");

const app = express();
app.use(cors());
app.use(parser.json());

// How to send to Database
MongoClient.connect("mongodb://localhost:27017") 
  .then(client => {
    const database = client.db("hotel");
    const bookingsCollection = database.collection("bookings");
    const bookingsRouter = createRouter(bookingsCollection);
    app.use("/api/bookings", bookingsRouter);
  })
  .catch(console.error);

// Listens for request from client 
app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
