import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    
  }
});

instance.interceptors.response.use (
  response => {
    return response;
  },
  error => {
    if(error.response.status === 401) {
      localStorage.removeItem("token");
    }
  }
);

export const register = (data) => {
  const {email, password, username} = data;
  return instance.post("/join", {
    email,
    password,
    username,
  });
};

export const loginApi = (data) => {
  const {email, password} = data;
  return (
    instance.post("/login", {
      email,
      password
    })
  )
}