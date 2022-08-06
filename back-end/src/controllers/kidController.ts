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
    
    const body: { name: string, phone: string } = req.body;
    const guardianData: CreateGuardianData = {

        name: body.name,
        phone: body.phone

    }

    await kidService.guardianRegistrationService(guardianData);

    res.sendStatus(201);

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