import mongoose, { Schema } from "mongoose";

const moodSchema = new Schema(
    {
        mood: {
            type: String,
            required: true
        }
 
    }
)

const Mood = mongoose.model("Mood", moodSchema)

export {Mood}