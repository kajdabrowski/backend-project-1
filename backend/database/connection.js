const { Sequelize } = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'fuskeluring.db'
})



module.exports = db