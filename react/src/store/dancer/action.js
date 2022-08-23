import { SET_ADD_DANCER, SET_DANCER} from "./type"

export const dancerData = (value)=>{
    return {type:SET_DANCER,value}
}
export const addNewDancerData = (value)=>{
      return {type:SET_ADD_DANCER,value}
}
