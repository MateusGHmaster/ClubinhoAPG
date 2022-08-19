import { faker } from '@faker-js/faker';
import prisma from '../../src/config/database.js';

function registerPresence () {

    return {

        date: faker.date.between('01/01/2010', '31/12/2020'),
        isPresent: true, 
        kidId: 1

    }

}

export async function getPresenceDays () {
    
    const result = await prisma.presence.findMany();
    
    return result;

}

const presenceFactory = {

    registerPresence,
    getPresenceDays

}

export default presenceFactory;