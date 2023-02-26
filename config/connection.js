const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

function dbconnection(){
    mongoose.set("strictQuery", false)
    mongoose.connect(process.env.DB_URL,{useNewUrlParser: true })

    mongoose.connection.on('connected', ()=>{
        console.log('connection successful')
    })

    mongoose.connection.on('error', (error)=>{
        console.log(error)
        console.log('an error occured');
    })
}

module.exports = dbconnection;