const express = require('express');
const dotenv = require('dotenv');
const dbconnection = require('./config/connection');
const { routeManager } = require('./routes/rts');
dbconnection()
dotenv.config()

const app = express()
const port= process.env.PORT
app.use(express.json())
app.use('/', routeManager)
app.listen(port, ()=>{
console.log(`app listening on ${port}`)
})
