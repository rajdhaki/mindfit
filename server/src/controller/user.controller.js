import { asyncHandlear } from "../utils/asynHandlear.js";
import {User} from "../models/user.model.js"

const registerUser = asyncHandlear(async (req,res)=>{

const data = req.body
// console.log(JSON.stringify(data))
 const saveUser = new User(data)
// console.log(saveUser)
 saveUser.save().then( () =>{  res.status(200).send( "Data Is Saved")}).catch( e => {console.log(saveUser); res.status(500).send("Internal Server Error")})

})
export {registerUser}