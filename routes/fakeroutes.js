const {Router} = require('express')
const fakeroutes = new Router()
const fakecontroller = require('../controllers/fakeController')
const jwtauth = require('../middleware/jwtauth')
 

fakeroutes.get('/generate', jwtauth, fakecontroller.generateFakes)


module.exports = fakeroutes