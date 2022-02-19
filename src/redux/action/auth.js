import { SIGNIN, LOGOUT } from "../constant/auth";

export const signin = (payload) => ({
  type: SIGNIN,
  payload: payload,
});

export const logout = () => ({
  type: LOGOUT,
});
