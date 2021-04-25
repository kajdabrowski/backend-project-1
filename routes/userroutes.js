const { Router } = require('express')
const userroutes = new Router()

const userController = require('../controllers/userController')

// userroutes.get('/', (req, res) => {
//     res.json({ message: "bajs" })
// })

userroutes.post('/', userController.test)
userroutes.post('/login', userController.loginUser)



module.exports = userroutes