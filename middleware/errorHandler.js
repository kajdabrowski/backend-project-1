const { UserError } = require('../errors/index')
const { BaseError } = require('sequelize')

module.exports = {
    //Rör ej, alla fel som ska läggas till ska skrivas i index.js i errors-mappen. 
    errorHandler(error, req, res, next) {
        if(error instanceof UserError){
            res.status(error.errorCode).json({error: error.message})
        } else if(error instanceof BaseError){
            res.status(400).json({error: error.message})
        } else{
            console.log(error)
            res.status(500).json({
                error: 'This is your basic error message'
            })
        }
    }
}
