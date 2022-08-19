import { Request, Response } from 'express';
import * as guardianService from '../services/guardianService.js';
import { CreateGuardianData } from '../repositories/guardianRepository.js';

export async function guardianRegistration(req: Request, res: Response) {
    
    const body: { guardianName: string, guardianPhone: number } = req.body;
    const guardianData: CreateGuardianData = {

        guardianName: body.guardianName,
        guardianPhone: +body.guardianPhone

    }

    const guardianDataInsertion = await guardianService.guardianRegistrationService(guardianData);

    res.status(201).send([guardianDataInsertion.id]);
    
}