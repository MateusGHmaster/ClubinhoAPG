import { CreateKidData, CreatePresenceData, insertKidData, findByKidName, insertKidPresence, CreateGuardianData, insertGuardianData, getPresenceHistoryById, findKidById, getKidInfo, getRegisteredKidsList, getPresenceToday } from '../repositories/kidRepository.js';
import dayjs from 'dayjs';

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
    
    const guardianDataInsertion = await insertGuardianData(guardianData);

    return guardianDataInsertion;

}

export async function getKidsListService () {
    
    return await getRegisteredKidsList();

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

export async function getKidInfoService (kidId: number) {
    
    const kidInfo = await getKidInfo(kidId);

    if (!kidInfo) {
        throw {

            type: 'not_found',
            message: 'Info: not found'

        }
    }

    return kidInfo;

}

export async function getKidsPresenceTodayService () {
    
    const date = dayjs().format('DD/MM/YYYY');
    const kidsPresenceList = await getPresenceToday();
    const idArray = [];

    const listByDate = kidsPresenceList.filter((value) => {

        return value.date === date;

    });


    const listByKidId = [];

    for (let i = listByDate.length - 1; i >= 0; i --) {

        const include = idArray.includes(listByDate[i].kidId);

        if (!include) {
            idArray.push( listByDate[i].kidId);
            listByKidId.push(listByDate[i]);
        }
        
    }

    return listByKidId;

}

