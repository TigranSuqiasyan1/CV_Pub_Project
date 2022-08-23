import { dancer} from "./state";
import {SET_DANCER} from "./type";

export const dancerReducer = (state = dancer, action) => {
    switch (action.type) {
        case SET_DANCER:
            state.arr = action.value
            break
        default:
            break;
    }
    return {
        ...state
    };
};