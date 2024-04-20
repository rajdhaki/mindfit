import { Router } from "express";
import { userLogin } from "../controller/findUser.controller.js";
import { registerUser } from "../controller/user.controller.js";
import { createUserMood } from "../controller/userMood.controller.js";

const router = Router ()


router.route("/registration").post(registerUser)
router.route("/login").post(userLogin)
router.route("/mood").post(createUserMood)


export default router