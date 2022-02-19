import { SIGNIN, LOGOUT } from "../constant/auth";

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        auth: action.payload,
      };
    case LOGOUT:
      return {
        auth: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
