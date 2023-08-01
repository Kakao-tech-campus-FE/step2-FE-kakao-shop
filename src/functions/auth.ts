import { localStorage } from "@/functions/localstorage";

export const getAuth = (): string => {
  return localStorage.get<string>("Authorization", "");
};

export const removeAuth = () => {
  return localStorage.remove("Authorization");
};

export const setAuth = (token: string) => {
  return localStorage.set("Authorization", token);
};
