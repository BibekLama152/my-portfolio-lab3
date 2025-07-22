import express from 'express';
import * as controller from '../controllers/qualification.controller.js';
import { requireSignin } from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/')
  .get(requireSignin, controller.list)
  .post(requireSignin, controller.create)
  .delete(requireSignin, controller.removeAll);

router.route('/:id')
  .get(requireSignin, controller.read)
  .put(requireSignin, controller.update)
  .delete(requireSignin, controller.remove);

export default router;
