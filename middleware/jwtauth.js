const User = require('../models/usermodel')
const jwt = require('jsonwebtoken')

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
    
}

module.exports = jwtauth
