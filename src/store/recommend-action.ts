import {DELETE, GET, POST} from "./fetch-auth-action";

const createTokenHeader = (token:string) => {
    return {
        header: {
            'Authorization': 'Bearer ' + token
        }
    }
}

export const getRecommends = (param:string, token?:string) => {
    const URL = '/recommend/list?id=' + param;
    const response = (token ? GET(URL, createTokenHeader(token)) : GET(URL, {}));
    return response;
}

export const makeRecommend = async (id_str:string, token:string) => {
    const URL = '/recommend/';
    const id = +id_str
    const response = POST(URL,{ id: id}, token);
    return response;
}

export const deleteRecommend = (param:string, token:string) => {
    const URL = '/recommend/one?id=' + param;
    const response = DELETE(URL, createTokenHeader(token));
    return response;
}
