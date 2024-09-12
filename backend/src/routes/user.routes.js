import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/sign-up").post(signUp);
router.route("/sign-in").post(signIn);
router.route("/sign-out").post(verifyJWT, signOut);

export default router;
