import { CreateKidData, CreatePresenceData, insertKidData, findByKidName, findKidById, insertKidPresence, CreateGuardianData, insertGuardianData } from '../repositories/kidRepository.js';

export async function kidRegistrationService (kidData: CreateKidData) {

    const { name } = kidData;
    const checkForKidName = await findByKidName(name);

    if (checkForKidName) {
        throw {

            type: 'conflict',
            message: 'Kid: already registered'

        }
    }

    await insertKidData(kidData);

}

export async function guardianRegistrationService (guardianData: CreateGuardianData) {
    
    await insertGuardianData(guardianData);

}

export async function kidPresenceService (presenceData: CreatePresenceData) {

    await insertKidPresence(presenceData);

}