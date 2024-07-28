const userMiddleware = require('./middleware/userMiddleware.js')
const { Users } = require("../db/userDB")

const express = require('express');
const jwt = require('jsonwebtoken');
const z = require('zod');
const app = express();


app.use(express.json());

app.post('/createUser', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
})

app.get("/", (req, res) => {

})

app.listen(3000, (req, res) => {
    console.log("Server has started on port 3000");
})

