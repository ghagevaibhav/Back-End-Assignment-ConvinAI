const {Users} = require("../db")

function userMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;

    Users.findOne({
        username: username,
        password: password
    }).then((value) => {
        if(value){
            next();
        }
        else{
            res.status(403).json({
                msg: 'Username or Password is incorrect'
            });
        }
    });
}

module.exports = userMiddleware