import { Router } from "express";

const router = Router();

router.get("/",(req,res)=>{
    res.send("stats router is being tested nice")
})

export default router;