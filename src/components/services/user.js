import { instance } from "./index"
const apiUrl = process.env.REACT_APP_API_URL;

export const register = (data) => {
  const {email, password, username} = data;
  return instance.post(apiUrl + "/join", { //baseURL/join
      email, 
      password,
      username,
    })
};

export const login = (data) => {
  const {email, password} = data;
  return instance.post(apiUrl + "/login", { // baseURL/login
    email, 
    password,
  });
};