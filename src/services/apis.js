import axios from "axios";

export const commonInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

authInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});

export const fetchProductsByPage = ({ page }) => {
  return commonInstance.get(`/products?page=${page}`);
};

export const fetchProductById = ({ id }) => {
  return commonInstance.get(`/products/${id}`);
};

export const addCart = (payload) => {
  return authInstance.post("/carts/add", payload);
};

export const showCart = () => {
  return authInstance.get("/carts");
};
