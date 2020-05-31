import { Router } from 'express';

import AuthRouter from './routes/auth';
import AdminRouter from './routes/admin';
import UserRouter from './routes/user';
import {
  ensureLoggedInMiddleware,
  ensureUserIsAdmin
} from './routes/middleware/auth';

const router = Router();

router.use('/auth', AuthRouter);
router.use('/admin', ensureLoggedInMiddleware, ensureUserIsAdmin, AdminRouter);
router.use('/user', ensureLoggedInMiddleware, UserRouter);

export default router;
