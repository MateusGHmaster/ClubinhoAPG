import { Router } from 'express';
import authRouter from './authRouter.js';
import guardianRouter from './guardianRouter.js';
import kidRouter from './kidRouter.js';
import presenceRouter from './presenceRouter.js';

const router = Router();

router.use(authRouter);
router.use(kidRouter);
router.use(guardianRouter);
router.use(presenceRouter);

export default router;