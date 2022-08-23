import { SET_ADD_EVENT,  SET_EVENT } from "./type";

export const eventData = (value)=>{
    return {type:SET_EVENT,value}
}
export const addEvent = (value)=>{
    return {type:SET_ADD_EVENT,value}
}
