require('dotenv').config()
const express = require('express')
const app = express()
const jwt = require("jsonwebtoken")
// const bcrypt = require("bcryptjs")


// const userroutes = require('./backend/routes/userroutes')
 


app.use( express.json() )
const PORT = process.env.PORT ||8080


// All middleware, som loggers och headers, ska importeras här.


// app.use(userroutes)

app.listen(PORT, () => console.log("Running on port" + PORT))






