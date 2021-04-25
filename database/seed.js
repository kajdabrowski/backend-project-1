const db = require('./connection')
const User = require('../models/usermodel')
const bcrypt = require('bcrypt')


const users = [
    {
        password: "grillkorv123",
        email: "stabbing.steve@fuskeluring.hack"
    },
    {
        password: "bananpaj1337",
        email: "murdering.mike@fuskeluring.hack"
    },
    {
        password: "sötsursås42",
        email: "crimes.johnsson@fuskeluring.hack"
    }
];

//Här ska passwrd hashas innan de skrivs till db
// function userSeed() {
//     // for (let user of users) {
//     //    user.password = bcrypt.hashSync(user.password, 10)        
//     // //    console.log(user.password)
//     // }
//     for (let user of users) {
//         console.log(user.password + user.email)
//     }
// }

//Kom ihåg att både setup och seed måste köras separat. 

function userSeed() {
    for (let user of users) {
        User.create({
            password: bcrypt.hashSync(user.password, 10),
            email: user.email
        })
    }
}

userSeed()