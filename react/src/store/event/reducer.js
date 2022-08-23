import { event} from "./state";
import { SET_ADD_EVENT, SET_EVENT} from "./type";

export const eventReducer = (state = event, action) => {
    switch (action.type) {
        case SET_EVENT:
            state.arr = action.value
         case SET_ADD_EVENT:
            state.arr = action.value   
            break
           
        default:
            break;
    }
    return { ...state };
};