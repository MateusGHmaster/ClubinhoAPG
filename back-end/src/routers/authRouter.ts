import { Router } from 'express';
import { signUpSchema, loginSchema } from '../schemas/authSchema.js';
import { signUp, login } from '../controllers/authController.js';
import schemaValidate from '../middlewares/schemaValidate.js';

const authRouter = Router();

authRouter.post('/sign-up', schemaValidate(signUpSchema), signUp);
authRouter.post('/login', schemaValidate(loginSchema), login);

export default authRouter;