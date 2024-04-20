import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        fullname: {
            type: String,
            required: true,
            lowecase: true,
        },
        email: {
            type: String,
            required: true,
            lowecase: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        repassword: {
            type: String,
            required: true,
        },
        mood: {
            type: Schema.Types.ObjectId,
            ref: "Mood"
        }

    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userSchema)

export { User }