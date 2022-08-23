import { SET_CATEGORY, SET_GET_ALL_CATEGORY,  GET_CATEGORY_BY_ID} from "./type";

export const categoryData = (value)=>{
    return {type:SET_CATEGORY,value}
}
export const allCategory = (value) =>{
    return {type:SET_GET_ALL_CATEGORY,value}
}


