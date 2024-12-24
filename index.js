require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
app.get ('/',(req,res)=>{
    res.send('hello world!')
})
app.get ('/hello',(req,res)=>{
    res.send('hiiiiiiiiiiii world!')
})

app.listen(process.env.PORT , ()=>{
    console.log(`Example app , listening on port ${port}`)
})