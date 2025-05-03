const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const { users_routes } = require("./routes/usersroutes");

const app = express();
const DB = process.env.DB;

mongoose
  .connect(DB)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((e) => {
    console.log(`DB Disconnected with Error ${e}`);
  });

//enable back end to read body data that sent from front end
app.use(express.json());

//fix any browsers cors problem
app.use(cors());

app.use("/api/users", users_routes);

//handle any invalid routes
app.use((req, res) => {
  return res.status(500).json({
    status: 500,
    data: { data: null, message: "invalid route" },
  });
});

const PORT = 3000;

module.exports = app;
