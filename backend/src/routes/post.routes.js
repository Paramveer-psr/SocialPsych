import { Router } from "express";
import {
  commentOnPost,
  createPost,
  getPosts,
  likePost,
} from "../controllers/post.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  upload,
  uploadErrorHandler,
} from "../middlewares/multer.middleware.js";

const router = Router();

router.post("/create", verifyJWT, upload, uploadErrorHandler, createPost);
router.get("/", verifyJWT, getPosts);
router.post("/like/:postId", verifyJWT, likePost);
router.post("/comment/:postId", verifyJWT, commentOnPost);

export default router;
