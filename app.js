const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const bodyParser = require('body-parser');

const app = express();
const db = require('./config/keys').mongoURI;


mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api/users", users);
app.use("/api/tweets", tweets);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`The server is running on ${port}`));
