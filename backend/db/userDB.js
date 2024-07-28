const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:oMeyMiDShQNaLpUT@cluster0.cdutnom.mongodb.net/")

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, unique: true, unique: true},
    phoneNumber: {type: String, required: true},
}); 

const Users = mongoose.model('Users', UserSchema)

module.exports = Users
