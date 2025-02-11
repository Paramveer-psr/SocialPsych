import { Router } from "express";
import {
  commentOnPost,
  createPost,
  getPosts,
  likePost,
  getUserPosts,
} from "../controllers/post.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  cleanupTempFile,
  upload,
  uploadErrorHandler,
} from "../middlewares/multer.middleware.js";

const router = Router();

router.post(
  "/create",
  verifyJWT,
  upload,
  uploadErrorHandler,
  createPost,
  cleanupTempFile
);
router.get("/", verifyJWT, getPosts);
router.get("/user/:username", verifyJWT, getUserPosts);
router.post("/like/:postId", verifyJWT, likePost);
router.post("/comment/:postId", verifyJWT, commentOnPost);

export default router;
