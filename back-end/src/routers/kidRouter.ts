import { Router } from 'express';
import { kidSchema, guardianSchema } from '../schemas/kidSchema.js';
import { kidRegistration, kidPresence, guardianRegistration } from '../controllers/kidController.js';
import schemaValidate from '../middlewares/schemaValidate.js';

const kidRouter = Router();

kidRouter.post('/register-r', schemaValidate(guardianSchema), guardianRegistration);
kidRouter.post('/register-c', schemaValidate(kidSchema), kidRegistration);
kidRouter.post('/presence', kidPresence);

export default kidRouter;