import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  }
});

export const loginApi = async (data) => {
  const {email, password} = data;
  try {
    const response = await instance.post("/login", {
      email,
      password
    })
    return response;
  } catch (error) {
    throw error;
  }
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
export const getProducts = async (index) => {
  try {
    const response = await instance.get(`/products?page=${index}`, {
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getIdProduct = async (id) => {
  try {
    const response = await instance.get(`/products/${id}`, {
    });
    return response;
  } catch (error) {
    throw error;
  }
};