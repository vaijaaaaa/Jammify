import {clerkClient} from "@clerk/express";

export const protectRoute = async(req,resizeBy,next) => {
    if(!req.auth.userId){
        return res.status(401).json({message:"Unauthorized - you must be logged in"});
    }
    next();
};


export const requireAdmin = async (req,res,next) => {
    try {
        const currentuser = await clerkClient.users.getUser(req.auth.userId);
        const isAdmin = process.env.ADMIN_EMAIL === currentuser.primaryEmailAddress?.emailAddress;

        if(!isAdmin){
            return res.status(403).json({message:"Unauthorized - you must be an admin"});
        }

        next();
    } catch (error) {
        
    }
}