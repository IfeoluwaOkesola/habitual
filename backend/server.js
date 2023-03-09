const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
const { routeManager } = require('./routes/rts');
const dbconnection = require('./config/connection');
const cors = require('cors')
dbconnection()
dotenv.config()

const app = express()
const port= process.env.PORT
app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials:true, origin: function (origin, callback) {
    console.log(`origin${origin} access granted`)
    callback(null, true)
}}))

app.use('/', routeManager)
app.listen(port, ()=>{
console.log(`app listening on ${port}`)
})
