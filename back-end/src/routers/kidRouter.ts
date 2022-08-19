import { Router } from 'express';
import { kidSchema } from '../schemas/kidSchema.js';
import { kidRegistration, getKidInfo, getKidsList, findKidById } from '../controllers/kidController.js';

import schemaValidate from '../middlewares/schemaValidate.js';

const kidRouter = Router();

kidRouter.post('/register-c', schemaValidate(kidSchema), kidRegistration);
kidRouter.get('/kids', getKidsList);
kidRouter.get('/kid/:kidId', findKidById);
kidRouter.get('/info/:id', getKidInfo);

export default kidRouter;