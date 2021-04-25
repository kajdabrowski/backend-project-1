const { Sequelize } = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/fuskeluring.db'//Hette tidigare fuskeluring.db
})



module.exports = db