const db = require('../database/connection')
const { DataTypes } = require('sequelize')
const { InvalidLogin } = require('../errors')
// const jwt = require('jsonwebtoken')
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




// User.changeUserPassword = ()

module.exports = User


