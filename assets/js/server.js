const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlenconded({ extended: true }));

app.use(express.static("public"));

app.listen(PORT, function(){
    console.log(`listening on port` + PORT);
})