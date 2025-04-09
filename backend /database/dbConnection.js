import mongoose from "mongoose";
export const dbConnection = async()=>{
    mongoose.connect(process.env.MONGO_URI , {
        dbName:"RESTAURANT"
    }).then(()=>{
        console.log("CONNECTED TO DATABSE SUCCESSFULLY");
    }).catch((err) => {
        console.log("SOME ERROR OCCURED");
        
    })
}