const { InvalidLogin, InvalidBody } = require("../errors")
const usermodel = require("../models/usermodel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//Glöm inte att fixa require för allt som används här.



async function test(req, res, next) {
    res.json({ message: "sdfd" })

}

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

function getUserInfo(req, res, next) {
    const userEmail = req.body.email
    res.json({ userEmail })
}


//Felhantering - invalidBody
//Felhantering - Dålig connection med model. Skriv ny. 
//Felhantering - Skickar in användare som inte finns. Skriv ny. 

async function changeUserPassword(req, res, next) {
    try {
        //Tar emot mail från req
        const userEmail = req.body.email
        const newPassword = req.body.password
        //Hashar lösenordet från req
        const hashedNewPassword = bcrypt.hashSync(newPassword, 10)
        //Uppdaterar lösenordet för den hittade/matchade användaren med det nya, hashade lösenordet
       
        await usermodel.update({ password: hashedNewPassword }, { where: { email: userEmail } })
        // const updatedUser = await usermodel.findOne({where: {email: userEmail}})
        // console.log(updatedUser);
        res.json({ message: "Password changed successfully" })
    } catch (error) { next(error) }
}


module.exports = {
    test,
    loginUser,
    getUserInfo,
    changeUserPassword,
}