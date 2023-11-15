const mongoose = require('mongoose')

const connectDB = async () => 
{

    try {
        const conn = await mongoose.connect("mongodb+srv://Shivaprasad:Pass123@cluster0.cwxauli.mongodb.net/students?retryWrites=true&w=majority")
        console.log("connected successfully")
        
    } catch (error) {
        console.log(error)
        
    }

}


module.exports = connectDB;