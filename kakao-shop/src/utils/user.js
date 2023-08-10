import { removeCookie, setCookie } from "../storage/Cookie";

export const setLogin = async (email, token, isKeepLog) => {
  if (isKeepLog) {
    setCookie("email", email, { maxAge: 3600 * 24 * 365 });
    setCookie("token", token, { maxAge: 3600 * 24 * 365 });
  } else {
    setCookie("email", email, { maxAge: 1800 });
    setCookie("token", token, { maxAge: 1800 });
  }
};

export const logout = async () => {
  removeCookie("email");
  removeCookie("token");
  window.location.href = "/";
};
