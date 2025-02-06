import express from "express";
import dotenv from "dotenv";
import {clerkMiddleware} from "@clerk/express";
import fileUpload from "express-fileupload";
import path from "path";


import { connectDB } from "./lib/db.js";
import userRoutes from "./routes/user.route.js"
import adminRoutes from "./routes/admin.route.js"
import authRoutes from "./routes/auth.route.js"
import songRoutes from "./routes/song.route.js"
import albumRoutes from "./routes/album.route.js"
import statRoutes from "./routes/stat.route.js"




dotenv.config();


const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT

app.use(express.json());
app.use(clerkMiddleware());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir:path.join(__dirname,"tmp"),
}));




app.use("/api/users",userRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/admin",adminRoutes)
app.use("/api/songs",songRoutes)
app.use("/api/albums",albumRoutes)
app.use("/api/stats",statRoutes)

app.listen(5000,()=> {
    console.log("Server is running on port 5000");
    connectDB();
})