import { SET_ADD_PRODUCT,  SET_PRODUCTS } from "./type";

export const productData = (value)=>{
    return {type:SET_PRODUCTS,value}
}

export const addProductData = (value)=>{
    return {type:SET_ADD_PRODUCT,value}
}
