const express = require('express')
const dotenv = require('dotenv').config()
const app = express()

const userroutes = require('./routes/userroutes')
const fakeroutes = require('./routes/fakeroutes')



app.use(express.json())


const {errorHandler} = require('./middleware/errorHandler')

app.use(userroutes)
app.use(fakeroutes)

app.use(errorHandler)


const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log("Running on port" + PORT))






