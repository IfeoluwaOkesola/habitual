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
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
  });
app.use('/', routeManager)
app.listen(port, ()=>{
console.log(`app listening on ${port}`)
})
