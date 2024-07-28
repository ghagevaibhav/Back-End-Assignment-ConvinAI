const userMiddleware = require('./middleware/userAuthentication')

const express = require('express');
const jwt = require('jsonwebtoken');
const z = require('zod');
const app = express();


app.use(express.json());

app.post('/createUser', (req, res) => {

})

app.get("/", (req, res) => {

})

app.listen(3000, (req, res) => {
    console.log("Server has started on port 3000");
})

