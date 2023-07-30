const express = require("express");
const cors = require("cors");

const studentsRoutes = require("./routes/studentsRoutes");
const teachersRoutes = require("./routes/teachersRoutes");

const app = express();

app.use(cors({
origin: [process.env.PROXY_URI]
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send(`
    <h2>API is working and silently waiting to be called</h2>
    <h4>Check objects in json format:</h4>
    <a href="${process.env.PROXY_URI}api/v2/students">Students Archive Object</a> <a href="${process.env.PROXY_URI}api/v2/teachers">Teachers Archive Object</a>`);
})

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});


app.use("/api/v2/students", studentsRoutes);
app.use("/api/v2/teachers", teachersRoutes);

module.exports = app;
