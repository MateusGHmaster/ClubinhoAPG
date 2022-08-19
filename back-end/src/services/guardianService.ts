import { CreateGuardianData, insertGuardianData } from '../repositories/guardianRepository.js';

export async function guardianRegistrationService (guardianData: CreateGuardianData) {
    
    const guardianDataInsertion = await insertGuardianData(guardianData);

    return guardianDataInsertion;

}