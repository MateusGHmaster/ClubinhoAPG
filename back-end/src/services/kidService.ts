import { CreateKidData,  insertKidData, findByKidName,  findKidById, getKidInfo, getRegisteredKidsList } from '../repositories/kidRepository.js';

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

export async function getKidsListService () {
    
    return await getRegisteredKidsList();

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

export async function findKidByIdService (kidId: number) {
    
    const kid = await findKidById(kidId);

    return kid;

}

