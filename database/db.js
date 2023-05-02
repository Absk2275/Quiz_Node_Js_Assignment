
const mongoose = require("mongoose");
require("dotenv").config();
const Connection = async () =>{
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("Db connection Success");
    }
    catch(e){

        console.log("Failed to connect", e);
    }
}

module.exports = Connection;