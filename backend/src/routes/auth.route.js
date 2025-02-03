import { Router } from "express";

const router = Router();

router.get("/",(req,res)=>{
    res.send("auth testing");

})

export default router;