import { category } from "./state";
import { SET_CATEGORY, SET_GET_ALL_CATEGORY } from "./type";

export const categoryReducer = (state = category, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            state.arr = action.value
            break
        case SET_GET_ALL_CATEGORY:
            state.arr = action.value    
            break;
        default:
            break;
    }
    return { ...state };
};