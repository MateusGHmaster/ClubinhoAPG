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

    const { kidId } = presenceData;
    let kidPresenceToday = false;
    const checkForKidId = await findKidById(kidId);

    if (!checkForKidId) {
        throw {

            type: 'bad_request',
            message: 'Presence: cannot be registered due to not registered kid'

        }
    }

    kidPresenceToday = true;

    await insertKidPresence(presenceData);

}