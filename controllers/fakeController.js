const fakemodel = require('../models/fakemodel')
const jwt = require('jsonwebtoken')
const User = require('../models/usermodel')
// const usermodel = require('../models/usermodel') //Läggs till för att kunna öka fakeLimit

//Uppdaterad med throttling.
async function generateFakes(req, res, next) {
    //Skicka med token från inloggad användare för  att generera fakeUsers. 
    try {
        const authorization = req.headers.authorization
        const token = authorization.replace("Bearer ", "")
        const userId = jwt.verify(token, process.env.SECRET)
        // console.log(userId);
        const currentUser = await User.findByPk(userId.id)
        if(currentUser.fakelimit < 11){
            currentUser.fakelimit++
        } else {
            throw new Error
        }
        const getFakeUsers = fakemodel.generateFakes()
        await currentUser.save()
        // console.log(currentUser);
        res.json(getFakeUsers)
    } catch (error) {
        next(error)
    }
}


/* 
fakeLimiter - räkna antalet gånger som användaren har kört
generateFakes i fakeController. Gör detta med en crud som
skriver till användaren i usermodel. 

Om 10 överskrids, kasta ett error. 

Nollställ räknaren varje dag/dygn med hjälp av cron, 
moment eller något annat tjottahejsan. 
*/



module.exports = {
    generateFakes
}