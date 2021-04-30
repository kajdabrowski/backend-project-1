const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
// const jwt = require("jsonwebtoken")
// const bcrypt = require("bcrypt")


const userroutes = require('./routes/userroutes')
const fakeroutes = require('./routes/fakeroutes')



app.use(express.json())


// All middleware, som loggers och headers, ska importeras här.
const {errorHandler} = require('./middleware/errorHandler')

app.use(userroutes)
app.use(fakeroutes)

app.use(errorHandler)


const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log("Running on port" + PORT))






