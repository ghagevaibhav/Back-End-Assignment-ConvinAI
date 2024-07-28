const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:oMeyMiDShQNaLpUT@cluster0.cdutnom.mongodb.net/")

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    phoneNumber: String
}); 

const Users = mongoose.model('Users', UserSchema)

module.exports = Users
