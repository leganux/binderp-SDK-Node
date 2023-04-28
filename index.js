const express = require("express");
const bodyParser = require('body-parser');
const app = express();

const mongoose = require('./db')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.status(200).json({isAlive: true})
})

app.use('/api', require('./routes/_api'))

app.listen(3000, () => {
    console.log("The server started at port 3000");
});