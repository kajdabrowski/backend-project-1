const db = require('../database/connection')
const { DataTypes } = require('sequelize')
const { InvalidLogin } = require('../errors')
const jwtauth = require('../middleware/jwtauth')
const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')

const User = db.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

User.findOneUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const user = User.findOne({ where: { email } })
        resolve(user)
        if (!user) { reject(new InvalidLogin()) } 
    })
}


// Validerar token som tas emot från middlewaren jwtauth.
// User.validateToken = (token) => {
//     try{
//         return jwt.verify(token, process.env.SECRET)
//     } catch(error){
//         throw new Error//Kan bytas ut mot bättre fel
//     }
// }




// User.changeUserPassword = ()

module.exports = User 


