import { Router } from "express";
import {
  setProfile,
  signIn,
  signOut,
  signUp,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  upload,
  uploadErrorHandler,
} from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/sign-up").post(signUp);
router.route("/sign-in").post(signIn);
router.route("/sign-out").post(verifyJWT, signOut);
router
  .route("/set-profile")
  .post(verifyJWT, upload, uploadErrorHandler, setProfile);

export default router;
