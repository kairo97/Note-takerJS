const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const noteRoutes = require("../../controllers/taskController")
app.use("../db", noteRoutes)

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

app.listen(PORT, function(){
    console.log(`listening on port` + PORT);
})