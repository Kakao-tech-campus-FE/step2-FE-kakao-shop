import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    
  }
});


export const loginApi = (data) => {
  const {email, password} = data;
  return (
    instance.post("/login", {
      email,
      password
    })
  );
};

export const checkDuplicateEmail = ({email}) => {
  return instance.post("/check", {
    email
  });
};

export const register = (data) => {
  const {email, password, username} = data;
  return instance.post("/join", {
    email,
    password,
    username
  });
};