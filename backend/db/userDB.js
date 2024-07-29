const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, unique: true, unique: true},
    phoneNumber: {type: String, required: true},
}); 

const Users = mongoose.model('Users', UserSchema)

module.exports = Users
