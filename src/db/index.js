import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

 


 const connectDB=async()=>{
    try {
        const connetionInstance=mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\nmongo db coneected !! db host ${
            (await connetionInstance).Connection.host}`)
    } catch (err) {
        console.log("MONGOdb connection error",err);
        process.exit(1)
    }
 }

 export default connectDB