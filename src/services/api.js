import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

export const register = async (data) => {
  try {
    const response = await instance.post("/join", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (data) => {
  try {
    const response = await instance.post("/login", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
