const User = require('../models/usermodel')
const jwt = require('jsonwebtoken')
// const Error = require('../errors/index')
// console.log(User);
// //Importera felmeddelanden om du vill byta Error mot annat fel. 

const jwtauth = (req, res, next) => {
    try{
    const authorization = req.headers.authorization
    if (!authorization) {
        throw new Error
    }
    const token = authorization.replace('Bearer ', '')
    console.log(jwt.verify(token, process.env.SECRET));
         req.user = jwt.verify(token, process.env.SECRET)
         next()
    } catch(error){
        next(error)
    }
    // const user = User.validateToken(token) //Hänvisar till validateToken funktionen i usermodel. 
    // req.user = user
}

module.exports = jwtauth
