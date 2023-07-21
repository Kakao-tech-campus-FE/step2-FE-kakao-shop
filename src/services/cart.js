import { instance } from "./index";

export const addCart = (payload) => {
  const bearerToken = JSON.parse(localStorage.getItem("user")).value;
  return instance.post("/carts/add", payload, {
    headers: {
      Authorization: `${bearerToken}`,
    },
  });
};

export const getCart = async () => {
  const bearerToken = JSON.parse(localStorage.getItem("user")).value;
  try {
    const response = await instance.get("/carts", {
      headers: {
        Authorization: `${bearerToken}`,
      },
    });
    return response.data.response;
  } catch (error) {
    console.error("Error retrieving cart:", error);
    return null;
  }
};

export const updateCart = async (payload) => {
  const bearerToken = JSON.parse(localStorage.getItem("user")).value;
  try {
    await instance.post("/carts/update", payload, {
      headers: {
        Authorization: `${bearerToken}`,
      },
    });
  } catch (error) {
    console.error("Error updating cart:", error);
  }
};