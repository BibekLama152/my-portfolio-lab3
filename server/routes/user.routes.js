import express from "express";
import userCtrl from "../controllers/user.controller.js";
import { requireSignin, hasAuthorization } from "../controllers/auth.controller.js";


const router = express.Router();

// Main route for creating and listing users
router.route("/api/users")
  .get(userCtrl.list)
  .post(userCtrl.create);

// Route for operations on specific users
router.route("/api/users/:userId")
  .get(requireSignin, userCtrl.read)
  .put(requireSignin, hasAuthorization, userCtrl.update)
  .delete(requireSignin, hasAuthorization, userCtrl.remove);

// This runs whenever :userId param is in the URL
router.param("userId", userCtrl.userByID);

export default router;
