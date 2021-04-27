const { Router } = require('express')
const userroutes = new Router()
const userController = require('../controllers/userController')
const jwtauth = require('../middleware/jwtauth')

userroutes.post('/', userController.test)
userroutes.post('/login', userController.loginUser)
userroutes.get('/me', userController.getUserInfo)
userroutes.patch('/me', jwtauth, userController.changeUserPassword)
userroutes.get('/test', jwtauth, (req, res) => {
    console.log(req.user, "user from test");
    res.json({message: "hej"})
})



module.exports = userroutes