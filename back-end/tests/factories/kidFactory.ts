import { faker } from '@faker-js/faker';
import prisma from '../../src/config/database.js';

function createKidData () {

    return {

        name: faker.name.fullName(),
        birthDate: faker.date.birthdate(),
        guardianId: 1

    }

}

async function getKidsList () {

    const result = await prisma.kid.findMany();

    return result;

}

const kidFactory = {

    createKidData,
    getKidsList

}

export default kidFactory;