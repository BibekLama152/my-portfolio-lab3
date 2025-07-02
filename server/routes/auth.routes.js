import express from "express";
import { signin, signout } from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/api/auth/signin").post(signin);
router.route("/api/auth/signout").get(signout);

export default router;
