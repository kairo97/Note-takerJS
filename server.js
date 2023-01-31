const express = require("express");
const path = require("path");
const fs = require("fs");
const apiControllers = require("./controllers");


const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));


app.use("/api", apiControllers)
// app.use("/db", noteRoutes)

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

app.listen(PORT, function(){
    console.log(`listening on port` + PORT);
})