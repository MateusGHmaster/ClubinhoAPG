import { Router } from 'express';
import { guardianSchema } from '../schemas/guardianSchema.js';
import { guardianRegistration } from '../controllers/guardianController.js';
import schemaValidate from '../middlewares/schemaValidate.js';

const guardianRouter = Router();

guardianRouter.post('/register-r', schemaValidate(guardianSchema), guardianRegistration);

export default guardianRouter;