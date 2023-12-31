const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');
const db = require('./db');


db.authenticate().then(() => {
  console.log('Database connected...');
}).catch(err => {
  console.log('Error: ' + err);
})

const teamRoute = require("./routes/team.routes");
const userRoute = require("./routes/user.routes");


const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());

// Static directory path
app.use(express.static("uploads"));

// API root
app.use("/api", teamRoute);
app.use("/api", userRoute);

// PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Listening on port " + port);
});

// 404 Handler
app.use((req, res, next) => {
  next(createError(404));
});

// Base Route
app.get("/", (req, res) => {
  res.send("invaild endpoint");
});

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "dist/angular-mean-crud-tutorial/index.html")
  );
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
