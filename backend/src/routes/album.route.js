import { Router } from "express";

const router = Router();

router.get("/",(req,res)=>{
    res.send("album route is being tested ")
})

export default router;