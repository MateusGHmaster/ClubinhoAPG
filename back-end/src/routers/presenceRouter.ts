import { Router } from 'express';
import { presenceSchema } from '../schemas/presenceSchema.js';
import { kidPresence, getCurrentPresenceState, getKidsPresenceByDate, getPresenceHistoryByKid, getPresenceDaysHistory } from '../controllers/presenceController.js';
import schemaValidate from '../middlewares/schemaValidate.js';

const presenceRouter = Router();

presenceRouter.post('/presence', schemaValidate(presenceSchema), kidPresence);
presenceRouter.get('/presence', getCurrentPresenceState);
presenceRouter.get('/kid-history/:id', getPresenceHistoryByKid);
presenceRouter.get('/date-history/:date', getKidsPresenceByDate);
presenceRouter.get('/days-history', getPresenceDaysHistory);

export default presenceRouter;