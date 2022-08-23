import { cocktails } from "./state";
import { SET_COCKTAILS } from "./type";

export const cocktailsReducer = (state = cocktails,action) =>{
    switch (action.type){
        case SET_COCKTAILS:
            state.arr = action.value
            break
        default:
            break

    }
    return {...state}
}