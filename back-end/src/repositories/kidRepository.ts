import prisma from "../config/database.js";
import { kid } from "@prisma/client";

export type CreateKidData = Omit<kid, 'id'>

export async function insertKidData (kidData: CreateKidData) {
    
    await prisma.kid.create({ data: kidData });

}

export async function findByKidName (name: string) {
    
    const kid = await prisma.kid.findFirst({ where: { name } });

    return kid;

}