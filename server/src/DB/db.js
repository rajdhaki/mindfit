import mongoose from "mongoose";



const dbConnection = async ()=>{
try {
   await mongoose.connect(`mongodb+srv://rajdhaki5:Dhakiraj21.@rajdhaki5.zjnwnxb.mongodb.net/mindFit`)
    console.log("DATABASE IS CONNECTED !!")
} catch (e) {
    console.log("CONNECTION FAILD!!", e)
}
}

export {dbConnection} 