import { SET_LOGIN_USER, SET_STATUS, SET_USERS_ARRAY } from "./type"

export const loginData = (value)=>{
    return {type:SET_LOGIN_USER,value}
}

export const setStatus = (value)=>{
    return {type:SET_STATUS,value}
}

export const setUsersArray = (value)=>{
    return {type:SET_USERS_ARRAY,value}
}

