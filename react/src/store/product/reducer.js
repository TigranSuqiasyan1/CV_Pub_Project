import { product } from "./state";
import {  SET_PRODUCTS} from "./type";

export const productReducer = (state = product, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            state.arr = action.value
            break
        default:
            break;
    }
    return { ...state };
};