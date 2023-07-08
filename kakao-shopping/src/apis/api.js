import axios from "axios";
import { useQuery } from "react-query";

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

export const register = async (data) => {
  const {email, password, username} = data;
  try {
    const response = await instance.post("/join", {
      email,
      password,
      username
    });
    return response;
  } catch (error) {
    throw error;
  }
};
export const getProducts = async () => {
  try {
    const response = await instance.get("/products", {
    });
    return response;
  } catch (error) {
    throw error;
  }
};