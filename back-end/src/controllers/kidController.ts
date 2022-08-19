import { Request, Response } from 'express';
import * as kidService from '../services/kidService.js';
import { CreateKidData } from '../repositories/kidRepository.js';

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

export async function getKidsList (req: Request, res: Response) {
 
    const kidsList = await kidService.getKidsListService();

    res.status(201).send(kidsList);

}

export async function getKidInfo (req: Request, res: Response) {
    
    const { id } = req.params;
    const kidInfo = await kidService.getKidInfoService(+id);

    res.send(kidInfo);

}

export async function findKidById (req: Request, res: Response) {
    
    const { kidId } = req.params;
    const kid = await kidService.findKidByIdService(+kidId);

    res.send(kid);

}
