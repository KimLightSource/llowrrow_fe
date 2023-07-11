import {GET, POST} from "./fetch-auth-action"

const createTokenHeader = (token:string) => {
    return {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
}

const calculateRemainingTime = (expirationTime:number) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    return adjExpirationTime - currentTime;
}

export const loginTokenHandler = (token:string, expirationTime:number) => {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', String(expirationTime));
    return calculateRemainingTime(expirationTime);
}

export const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime') || '0';

    const remainingTime = calculateRemainingTime(+ storedExpirationDate);

    if (remainingTime <= 1000) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }
    return {
        token: storedToken,
        duration: remainingTime
    }
}

export const signupActionHandler = (userid: string, password: string, nickname: string, email:string, address:string) => {
    const URL = '/auth/signup'
    const signupObject = {userid, password, nickname, email, address}

    const response = POST(URL, signupObject, {});
    return response;
}

export const loginActionHandler = (userid:string, password:string) => {
    const URL = '/auth/login';
    const loginObject = {userid, password}
    const response = POST(URL, loginObject, {});

    return response;
}

export const logoutActionHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
}

export const getUserActionHandler = (token:string) =>{
    const URL = '/member/me';
    const response = GET(URL, createTokenHeader(token));
    return response;
}

export const changeNicknameActionHandler = (nickname: string, token: string) => {
    const URL = '/member/nickname';
    const changeNicknameObj = {nickname}
    const response = POST(URL, changeNicknameObj, createTokenHeader(token));
    
    return response;
}

export const changePasswordActionHandler = (
    exPassword: string, newPassword: string, token: string) => {
        const URL = '/member/password';
        const changePasswordObj = {exPassword, newPassword}
        const response = POST(URL, changePasswordObj, createTokenHeader(token));
        return response;
}

