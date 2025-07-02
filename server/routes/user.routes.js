import express from "express";
import userCtrl from "../controllers/user.controller.js";
import { requireSignin, hasAuthorization } from "../controllers/auth.controller.js";


const router = express.Router();

router.route("/users")
  .get(userCtrl.list)
  .post(userCtrl.create);

router.route("/api/users/:userId")
  .get(requireSignin, userCtrl.read)
  .put(requireSignin, hasAuthorization, userCtrl.update)
  .delete(requireSignin, hasAuthorization, userCtrl.remove);


router.param("userId", userCtrl.userByID);

export default router;
