import { CreateUserData, insertUserData, findByUserName } from '../repositories/authRepository.js';
import bcrypt from 'bcrypt';
import Jwt  from 'jsonwebtoken';

export async function signUpService (userData: CreateUserData) {

    const { name, username, password } = userData;
    const checkForUserName = await findByUserName(username);

    if (!name) {
        throw {

            type: 'bad_request',
            message: 'Name: is absent'

        }
    }

    if (checkForUserName) {
        throw {

            type: 'conflict',
            message: 'Username: already in use'

        }
    }

    userData.password = await bcrypt.hash(password, 10);

    await insertUserData(userData);

}

export async function loginService (userData: CreateUserData) {
    
    const { username, password } = userData;
    const user = await findByUserName(username);

    if ((!user) || !(await bcrypt.compare(password, user.password))) {
        throw {

            type: 'unauthorized',
            message: 'Credentials: incorrect username or password'

        }
    }

    const token = Jwt.sign({ id: user.id, username }, process.env.JWT_SECRET, {expiresIn: '24h'});

    return token;

}