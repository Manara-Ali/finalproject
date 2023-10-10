const express = require("express");
const cors = require("cors");
const learnerRouter = require("./routes/learnersRoute");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1/learners", learnerRouter);

module.exports = app;
