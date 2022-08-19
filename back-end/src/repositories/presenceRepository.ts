import prisma from '../config/database.js';
import { presence } from '@prisma/client';

export type CreatePresenceData = Omit<presence, 'id'>

export async function insertKidPresence (presenceData: CreatePresenceData) {

    await prisma.presence.create({ data: presenceData });

}

export async function getPresenceHistoryById (kidId: number) {
    
    return await prisma.presence.findMany({ where: { kidId } });

}

export async function getPresenceToday () {
    
    const result = await prisma.presence.findMany();
    
    return result;

}

export async function getKidsPresenceByDateRepo (date: string) {
    
    const result = await prisma.presence.findMany({ where: { date: date } });

    return result;

}