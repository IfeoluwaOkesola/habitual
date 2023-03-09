const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
//const cookieParser = require('cookie-parser')
dotenv.config()
const app = express()
const port = process.env.port

app.use(express.static('public'));
app.use(cors())
//app.use(cookieParser())
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/signUp', (req,res)=>{
    res.render('signup')
})

app.get('/signin',(req,res)=>{
    res.render('signin');
})



app.listen(port,()=>{
    console.log(`server running on ${port}`)
})

