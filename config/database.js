const mongoose = require('mongoose')

require('dotenv').config()

const url = process.env.DB_URL || "mongodb+srv://aniket:aniket@cluster0.9m93xjz.mongodb.net/test"

mongoose.connect(url, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const con = mongoose.connection

con.on('open', ()=>{
    console.log("Database connected");
})