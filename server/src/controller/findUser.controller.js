import { asyncHandlear } from "../utils/asynHandlear.js";
import { User } from "../models/user.model.js"
import { apiError } from "../utils/apiError.js"

const userLogin = asyncHandlear(async (req, res) => {
    console.log(req.body.email)

    const findedUser = await User.findOne({ email: req.body.email })

    if (findedUser === null) {
        throw new apiError(404, "User not found")
    }
    if (findedUser.password !== req.body.password){
        throw new apiError(404, "recheck the password")
    }
}
)

export { userLogin }