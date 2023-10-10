const express = require("express");
const learnerRouter = require("./routes/learnersRoute");

const app = express();

app.use(express.json());

app.use("/api/v1/learners", learnerRouter);

module.exports = app;
