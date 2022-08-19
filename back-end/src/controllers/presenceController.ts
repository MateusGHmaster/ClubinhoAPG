import { Request, Response } from 'express';
import * as presenceService from '../services/presenceService.js';
import { CreatePresenceData } from '../repositories/presenceRepository.js';

export async function kidPresence (req: Request, res: Response) {

    const body: { kidId: number, date: string, isPresent: boolean } = req.body;
    const kidPresence: CreatePresenceData = {

        kidId: +body.kidId,
        date: body.date,
        isPresent: body.isPresent

    }

    await presenceService.kidPresenceService(kidPresence);

    res.sendStatus(200);

}

export async function getCurrentPresenceState (req: Request, res: Response) {
    
    const currentPresenceState = await presenceService.getKidsPresenceTodayService();
    
    res.send(currentPresenceState);

}

export async function getPresenceHistoryByKid (req: Request, res: Response) {

    const { id } = req.params;
    const presenceHistory = await presenceService.getPresenceHistoryService(+id);

    res.send(presenceHistory);

}

export async function getKidsPresenceByDate (req: Request, res: Response) {

    const { date } = req.params;
    const presenceByDate = await presenceService.getKidsPresenceByDateService(date);

    res.send(presenceByDate);

}

export async function getPresenceDaysHistory (req: Request, res: Response) {
    
    const daysHistory = await presenceService.getPresenceDaysService();

    res.send(daysHistory);

}
