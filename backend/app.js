const express = require('express')
const mongoose = require("mongoose")
const userRoute = require("./routes/userRoute")
const expenseRoute = route('./routes/expenseRoute')
const app = express();

mongoose.connect("mongodb+srv://admin:oMeyMiDShQNaLpUT@cluster0.cdutnom.mongodb.net/")

app.use(express.json());
app.use('/api', userRoute);
app.use('/api', expenseRoute);

module.exports = app;