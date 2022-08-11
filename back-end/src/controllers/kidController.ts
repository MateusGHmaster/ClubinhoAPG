import { Request, Response } from 'express';
import { CreateKidData, CreatePresenceData, CreateGuardianData } from '../repositories/kidRepository.js';
import * as kidService from '../services/kidService.js';

export async function kidRegistration (req: Request, res: Response) {
    
    const body: { name: string, birthDate: string, guardianId: number } = req.body;
    const kidData: CreateKidData = {

        name: body.name, 
        birthDate: body.birthDate,
        guardianId: +body.guardianId

    };
    
    await kidService.kidRegistrationService(kidData);

    res.sendStatus(201);

}

export async function guardianRegistration(req: Request, res: Response) {
    
    const body: { guardianName: string, guardianPhone: number } = req.body;
    const guardianData: CreateGuardianData = {

        guardianName: body.guardianName,
        guardianPhone: +body.guardianPhone

    }

    const guardianDataInsertion = await kidService.guardianRegistrationService(guardianData);

    res.status(201).send([guardianDataInsertion.id]);
    
}

export async function getKidsList (req: Request, res: Response) {
 
    const kidsList = await kidService.getKidsListService();

    res.status(201).send(kidsList);

}

export async function kidPresence (req: Request, res: Response) {

    const body: { kidId: number, date: string, isPresent: boolean } = req.body;
    const kidPresence: CreatePresenceData = {

        kidId: +body.kidId,
        date: body.date,
        isPresent: body.isPresent

    }

    await kidService.kidPresenceService(kidPresence);

    res.sendStatus(200);

}

export async function presenceHistory (req: Request, res: Response) {

    const { id } = req.params;
    const presenceHistory = await kidService.getPresenceHistoryService(+id);

    res.send(presenceHistory);

}

export async function getKidInfo (req: Request, res: Response) {
    
    const { id } = req.params;
    const kidInfo = await kidService.getKidInfoService(+id);

    res.send(kidInfo);

}

export async function getCurrentPresenceState (req: Request, res: Response) {
    
    const currentPresenceState = await kidService.getKidsPresenceTodayService();
    
    res.send(currentPresenceState);

}
