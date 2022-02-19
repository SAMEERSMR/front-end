import { SET_ALL_USER } from "../constant/user";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_USER:
      return { users: [...action.paylaod.users] };
    default:
      return state;
  }
};

export default userReducer;
