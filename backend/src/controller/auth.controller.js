import { log } from "console";
import {User} from "../models/user.model";


export const authCallback = async (req,res,next)=>{
    try {
      const {id, firstName, lastName, imageUrl} = req.body;
  
      const user = await UserActivation.findOne({clerkId: id});
  
      if(!user){
          await User.create({
              clerkId:id,
              fullName: `${firstName} ${lastName}`,
              imageUrl
          })
      }
      res.send(200).json({success:true})
    } catch (error) {
      console.log("Error in authCallback",error);
      next(error);
    }
  
  }