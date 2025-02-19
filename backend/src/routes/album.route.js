import { Router } from "express";
import { get } from "mongoose";
import { getAlbumById } from "../controller/album.controller";

const router = Router();

router.get("/",getAlbums);
router.get("/:albumId",getAlbumById);  


export default router;