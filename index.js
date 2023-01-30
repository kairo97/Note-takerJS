const { application } = require('express');
const express =require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api", router)

app.get('/notes')