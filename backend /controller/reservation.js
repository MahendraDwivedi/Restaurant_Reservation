import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req , res , next)=>{
    const {firstName , lastName , email , phone , date , time } = req.body;
    if(!firstName || !lastName || !email || !phone || !date || !time){
        return next(new ErrorHandler('Please fill full reservation form!',400));
    }
    try {
        await Reservation.create({firstName , lastName , email , phone , date , time});
        res.status(200).
        json(
            {
                success:true,
                message:"Reservation Send SuccessFully"
            }
        );
    } catch (error) {
        if(error.name === "ValidationError"){
            const validationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new ErrorHandler(validationErrors.join(","),400));
        }
        return next(error);
    }
} 




// FRONTEND_URL = http://localhost:5173
// #  mahi@mongodb
// #  https://downloads.mongodb.com/compass/mongodb-compass_1.46.0_amd64.deb
// #  mongodb+srv://mahendradwivedi:mahi@mongodb@cluster0.q9iu2q7.mongodb.net/


//  MONGO_URI=mongodb+srv://mahendradwivedi:z2KFMHELfjLPQF4Q@cluster0.q9iu2q7.mongodb.net/?retryWrites=true
//  PORT = 3000
 