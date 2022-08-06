import prisma from "../config/database.js";
import { guardian, kid, presence } from "@prisma/client";

export type CreateKidData = Omit<kid, 'id'>
export type CreateGuardianData = Omit<guardian, 'id'>
export type CreatePresenceData = Omit<presence, 'id'>

export async function insertKidData (kidData: CreateKidData) {
    
    await prisma.kid.create({ data: kidData });

}

export async function findByKidName (name: string) {
    
    const kid = await prisma.kid.findFirst({ where: { name } });

    return kid;

}

export async function insertGuardianData (guardianData: CreateGuardianData) {
    
    await prisma.guardian.create({ data: guardianData });

}

export async function findKidById (kidId: number) {
    
    const result = await prisma.presence.findUnique({ where: { id: kidId } });

    return result;

}

export async function insertKidPresence (presenceData: CreatePresenceData) {

    await prisma.presence.create({ data: presenceData });

}

export async function getPresenceHistoryById (kidId: number) {
    
    return await prisma.presence.findMany({ where: { kidId} });

}
