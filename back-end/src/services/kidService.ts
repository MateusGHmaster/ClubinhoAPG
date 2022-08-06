import { CreateKidData, CreatePresenceData, insertKidData, findByKidName, insertKidPresence, CreateGuardianData, insertGuardianData, getPresenceHistoryById } from '../repositories/kidRepository.js';

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

export async function getPresenceHistoryService (kidId: number) {

    const presenceHistory = await getPresenceHistoryById(kidId);

    if (!presenceHistory) {
        throw {

            type: 'not_found',
            message: 'Kid: presence history not found'

        }
    }

    return presenceHistory;

}