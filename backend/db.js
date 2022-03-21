const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path: path.resolve(__dirname,'./.env')});
const mongoURI = process.env.DATABASE;
const connectToMongo = async()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongo successfully");
    });
}

module.exports = connectToMongo;
