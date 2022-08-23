import { user } from "./state";
import { SET_DELETE_USER, SET_LOGIN_USER, SET_STATUS, SET_USERS_ARRAY } from "./type";

export const userReducer = (state = user, action) => {
  switch (action.type) {
    case SET_LOGIN_USER:
      state.profile = action.value;
      break;
    case SET_USERS_ARRAY:
      state.arr = action.value;
      break;
    case SET_STATUS:
      state.status = action.value;
      break;
     
    default:
      break;
  }
  return { ...state };
};
