import { faker } from '@faker-js/faker';
import prisma from '../../src/config/database.js';

function createGuardianData () {

    return {

        guardianName: faker.name.fullName(),
        guardianPhone: faker.phone.number('9########')

    }

}

const guardianFactory = {

    createGuardianData

}

export default guardianFactory;