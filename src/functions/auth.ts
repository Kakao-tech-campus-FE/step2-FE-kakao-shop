import { localStorage } from "@/functions/localstorage";

export const getAuth = () => {
  return localStorage.get("Authorization", "");
};

export const removeAuth = () => {
  return localStorage.remove("Authorization");
};

export const setAuth = (token: string) => {
  return localStorage.set("Authorization", token);
};
