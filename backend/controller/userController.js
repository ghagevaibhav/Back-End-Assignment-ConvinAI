const Users = require('../db/userDB')

exports.createUser = async (req, res) => {
    try{
        const { email, username, phoneNumber } = req.body;
        const User = await Users.create({email, username, phoneNumber});
        res.status(201).json({
            msg: 'User Created Successfully'
        })
    }
    catch(err){
        res.status(400).json({
            msg: err
        })
    }
}

exports.getUserDetails = async (req, res) => {
    try{
        const user = await Users.findById(req.params.id)
        res.status(200).json(user);
    }
    catch(err){
        res.status(400).json({
            msg: err
        })
    }
}