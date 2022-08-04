import prisma from '../config/database.js';
import { user } from '@prisma/client';

export type CreateUserData = Omit<user, 'id'>

export interface userToken {

    id: number,
    username: string

}

export async function insertUserData (userData: CreateUserData) {
    
    await prisma.user.create({ data: userData });

}

export async function findByUserName (username: string) {
    
    const user = await prisma.user.findUnique({ where: { username } });

    return user;

}