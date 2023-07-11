import {DELETE, GET, POST, PUT} from "./fetch-auth-action";

type Product = {
    productName : string,
    amount: number,
    price: number,
    sale: number,
    category: string,
    description: string,
    img: string
}

const createTokenHeader = (token:string) => {
    return {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
}

export const getProductList = (token?: string) => {
    const URL = '/product/list';
    const response = (token ? GET(URL, createTokenHeader(token)): GET(URL, {}));
    return response;
}

export const registerProduct = (PostProduct: Product, token:string) => {
    const URL = '/product/';
    const response = POST(URL, PostProduct, createTokenHeader(token));
    return response;
}

export const changeDescription = (PostProduct: Product, token:string) => {
    const URL = '/product/description';
    const response = PUT(URL, PostProduct, createTokenHeader(token));
    return response;
}

export const changeSale = (PostProduct: Product, token:string) => {
    const URL = '/product/sale';
    const response = PUT(URL, PostProduct, createTokenHeader(token));
    return response;
}

export const deleteProduct = (param:string, token:string) => {
    const URL = '/product/?productName=' + param;
    const response = DELETE(URL, createTokenHeader(token));
    return response;
}
