import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"first name must contains at least 3 characters"],
        maxLength:[30,"first name cannot exceed 30 character!"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"last name must contains at least 3 characters"],
        maxLength:[30,"last name cannot exceed 30 character!"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Provide a valid email"],
    },
    phone:{
        type:String,
        required:true,
        minLength:[11,"phone number must contains only 11 digits"],
        maxLength:[11,"phone number must contains only 11 digits"]
    },
    time:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});

export  const Reservation = mongoose.model("Reservation",reservationSchema);