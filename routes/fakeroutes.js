const {Router} = require('express')
const fakeroutes = new Router()
// const faker = require('faker')
const fakecontroller = require('../controllers/fakeController')
 

fakeroutes.get('/faketest', (req, res) => {
    console.log(req.user, "test");
    res.json({message: "it works"})
})
fakeroutes.get('/generate', fakecontroller.generateFakes)


module.exports = fakeroutes