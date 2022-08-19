import prisma from '../config/database.js';
import { guardian } from '@prisma/client';

export type CreateGuardianData = Omit<guardian, 'id'>

export async function insertGuardianData (guardianData: CreateGuardianData) {
   
    const guardianInsertion = await prisma.guardian.create({ data: guardianData });
   
    return guardianInsertion;

}