import { Router } from 'express';
import { kidSchema, guardianSchema, presenceSchema } from '../schemas/kidSchema.js';
import { kidRegistration, kidPresence, guardianRegistration, presenceHistory } from '../controllers/kidController.js';
import schemaValidate from '../middlewares/schemaValidate.js';

const kidRouter = Router();

kidRouter.post('/register-r', schemaValidate(guardianSchema), guardianRegistration);
kidRouter.post('/register-c', schemaValidate(kidSchema), kidRegistration);
kidRouter.post('/presence', schemaValidate(presenceSchema), kidPresence);
kidRouter.get('/history/:id', presenceHistory);

export default kidRouter;