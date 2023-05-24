const express = require('express');
const path = require('path');

require('dotenv').config();

const app = express()

app.use(express.static(__dirname + '/public/css'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/landing.html'));
})

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

console.log(process.env.PORT)

app.listen(process.env.PORT || 3000, () => console.log("Server running ..."));