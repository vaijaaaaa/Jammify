import { Router } from "express";
import { getAdmin } from "../controller/admin.controller.js";
import { requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/",getAdmin,requireAdmin,createSong);

export default router;