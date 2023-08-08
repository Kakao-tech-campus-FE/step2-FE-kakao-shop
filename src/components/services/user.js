import { instance } from "./index"


export const register = (data) => {
  const {email, password, username} = data;
  return instance.post("/join", { //baseURL/join
      email, 
      password,
      username,
    })
};

export const login = (data) => {
  const {email, password} = data;
  return instance.post("/login", { // baseURL/login
    email, 
    password,
  });
};