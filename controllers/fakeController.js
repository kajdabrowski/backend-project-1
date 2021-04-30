const fakemodel = require('../models/fakemodel')
const jwt = require('jsonwebtoken')


async function generateFakes(req, res, next){
    //Skicka med token från inloggad användare för  att generera fakeUsers. 
    try{
        const authorization = req.headers.authorization
        const token = authorization.replace("Bearer ", "")
        jwt.verify(token, process.env.SECRET)
        const getFakeUsers = fakemodel.generateFakes()
        res.json(getFakeUsers)
    } catch(error) {
        next(error)
    }
}


module.exports = {
    generateFakes
}