import { Mood } from "../models/mood.model.js";
import { asyncHandlear } from "../utils/asynHandlear.js";
const createUserMood = asyncHandlear(async(req,res)=>{
const mood = req.body.text

console.log(req.body)
const saveMood = new Mood({mood: mood})
console.log(saveMood)
saveMood.save().then( () =>{  res.status(200).send( "Data Is Saved")}).catch( e => {console.log(saveMood); res.status(500).send("Internal Server Error")})
})
export {createUserMood}