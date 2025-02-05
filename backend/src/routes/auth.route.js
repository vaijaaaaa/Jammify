import { Router } from "express";

const router = Router();

router.post("/callback",async (req,res)=>{
  try {
    const {id, firstName, lastName, imageUrl} = req.body;

    const user = await UserActivation.findOne({clerkId: id});

    if(!user){
        await UserActivation.create({
            clerkId:id,
            fullName: `${firstName} ${lastName}`,
            imageUrl
        })
    }
    res.send(200).json({success:true})
  } catch (error) {
    res.status(500).json({message:"Internal server error",error})
  }

})

export default router;