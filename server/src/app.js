import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors())
app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded()) 


import userRouter from "./router/user.router.js"

app.use("/user",userRouter)


export default app