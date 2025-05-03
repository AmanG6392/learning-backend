import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))

app.use(express.urlencoded({extended: true, limit: "16kb"}))

app.use(express.static("public"))

app.use(cookieParser())

// routes import

import userRouter from './routes/user.routes.js'


//routes  declaration 
app.use("/api/v1/users", userRouter )
// const corsOptions = {
//     origin: "/api/v1/users", // Adjust as needed
//     credentials: true
// }
// app.use(cors("/api/v1/users"), userRouter);


// http://localhost:8000/api/v1/users/register

export default app



