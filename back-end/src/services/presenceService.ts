import { 
    CreatePresenceData, 
    insertKidPresence, 
    getPresenceHistoryById, 
    getPresenceToday, 
    getKidsPresenceByDateRepo 
} from '../repositories/presenceRepository.js';
import dayjs from 'dayjs';

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

    const pivotArray = [];

    const presenceDays = [];

    for (let i = presenceHistory.length - 1; i >= 0; i --) {

        const include = pivotArray.includes(presenceHistory[i].date);

        if (!include) {
            pivotArray.push(presenceHistory[i].date);
            presenceDays.push(presenceHistory[i]);
        }
        
    }

    return presenceDays;

}

export async function getKidsPresenceTodayService () {
    
    const date = dayjs().format('DD-MM-YYYY');
    const kidsPresenceList = await getPresenceToday();
    const idArray = [];

    const listByDate = kidsPresenceList.filter((value) => {

        return value.date === date;

    });


    const listByKidId = [];

    for (let i = listByDate.length - 1; i >= 0; i --) {

        const include = idArray.includes(listByDate[i].kidId);

        if (!include) {
            idArray.push(listByDate[i].kidId);
            listByKidId.push(listByDate[i]);
        }
        
    }

    return listByKidId;

}

export async function getPresenceDaysService () {
    
    const daysHistory = await getPresenceToday();

    const pivotArray = [];

    const presenceDays = [];

    for (let i = daysHistory.length - 1; i >= 0; i --) {

        const include = pivotArray.includes(daysHistory[i].date);

        if (!include) {
            pivotArray.push(daysHistory[i].date);
            presenceDays.push(daysHistory[i]);
        }
        
    }

    return presenceDays;

}

export async function getKidsPresenceByDateService (date: string) {
    
    const presenceByDate = await getKidsPresenceByDateRepo(date);

    if (!presenceByDate) {
        throw {

            type: 'not_found',
            message: 'Presences: not found'

        }
    }

    const pivotArray = [];

    const presentKidsOnThatDay = [];

    for (let i = presenceByDate.length - 1; i >= 0; i --) {

        const include = pivotArray.includes(presenceByDate[i].kidId);

        if (!include) {
            pivotArray.push(presenceByDate[i].kidId);
            presentKidsOnThatDay.push(presenceByDate[i]);
        }
        
    }

    return presentKidsOnThatDay;

}