import express from 'express';
import { signin, signout, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/auth/signup', signup);
router.post('/auth/signin', signin);
router.get('/auth/signout', signout);

export default router;
