 const mongoose = require("mongoose")

const dbconnect = ()=>{
    mongoose.connect("mongodb+srv://vaghanipriya23:vFs5yTgCF8sr9qw7@netflix.x9becpq.mongodb.net/validation")
    .then((data)=>{
        if (data) {
            console.log("Data Base Connect Successfull...!");
        }
    })
    .catch((err)=>{
        console.log(err);
    })
}


module.exports = dbconnect