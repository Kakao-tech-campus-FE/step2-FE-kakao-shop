import instance from "./index";

export const signup = ( {email, username, password} ) => {
  return instance.post("/join", { "email": email, "username": username, "password": password });
};

export const login = ( {email, password }) => {
  return instance.post("/login", { "email": email, "password": password });
};
