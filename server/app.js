const express = require("express");
const cors = require("cors");

const studentsRoutes = require("./routes/studentsRoutes");
const teachersRoutes = require("./routes/teachersRoutes");

const app = express();

app.use(cors({
origin: [""]
}));
app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});


app.use("/api/v2/students", studentsRoutes);
app.use("/api/v2/teachers", teachersRoutes);

module.exports = app;
