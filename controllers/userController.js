const { InvalidLogin } = require("../errors")
const usermodel = require("../models/usermodel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//Glöm inte att fixa require för allt som används här.



async function test(req, res, next) {
    res.json({ message: "sdfd" })

}

/*Login ej komplett. Måste finnas en validateToken, för den
kommer behövas för andra funktioner. 
*/

async function loginUser(req, res, next) {
    try {
        // const { email, password } = req.body
        const userEmail = req.body.email
        const userPassword = req.body.password

        const user = await usermodel.findOneUser(userEmail, userPassword)//Väntar på resultat av authenticate i usermodel. 
        const passwordmatch = bcrypt.compareSync(userPassword, user.password)
        if (passwordmatch == true) {
            const token = jwt.sign(userPassword, process.env.SECRET)
            // res.json(token)
            res.json({ token, userEmail })
        } else {
            throw new InvalidLogin()
        }
    } catch (error) { next(error) }

}


/* 
loginUser i controller ska bara säga till när loginUser i model ska köras. loginUser i model 
sköter authentication av  
model ligger majoriteten av all logik som sköter inloggningen. 

*/



module.exports = {
    test,
    loginUser
}