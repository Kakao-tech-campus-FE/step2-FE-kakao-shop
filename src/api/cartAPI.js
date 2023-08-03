import instance from "@/api/instance.js";
import API from "@/constants/API.js";

const addCartItem = async ({ items }) => {
  return await instance({
    url: API.CARTS.ADD,
    method: "POST",
    data: items,
  });
};

const getCartItems = async () => {
  return await instance({
    url: API.CARTS.GET,
    method: "GET",
  });
};

const updateCartItems = async ({ items }) => {
  return await instance({
    url: API.CARTS.UPDATE,
    method: "POST",
    data: items,
  });
};

export default { addCartItem, getCartItems, updateCartItems };
