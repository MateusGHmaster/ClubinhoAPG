import prisma from '../config/database.js';
import { kid } from '@prisma/client';

export type CreateKidData = Omit<kid, 'id'>

export async function insertKidData (kidData: CreateKidData) {
    
    await prisma.kid.create({ data: kidData });

}

export async function findByKidName (name: string) {
    
    const kid = await prisma.kid.findFirst({ where: { name } });

    return kid;

}

export async function findKidById (kidId: number) {
    
    const result = await prisma.kid.findFirst({ where: { id: kidId } });

    return result;

}

export async function getRegisteredKidsList () {
    
    const result = await prisma.kid.findMany();

    return result;

}

export async function getKidInfo (kidId: number) {
    
    const result = await prisma.kid.findUnique({ 
        where: {
            id: kidId 
        },
        include: {
            guardian: {
                select: {
                    guardianName: true,
                    guardianPhone: true
                }
            }
        } 
    });

    return result;

}

