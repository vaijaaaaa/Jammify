import { Router } from "express";


const router  = Router();

router.get("/",(req,res)=>{
    res.send("Song Route is being tested haha")
})

export default router;