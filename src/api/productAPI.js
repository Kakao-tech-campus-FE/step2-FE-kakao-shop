import axios from "axios";
import API from "@/constants/API.js";

const getAllProducts = async ({ pageIndex }) => {
  return axios({
    url: import.meta.env.VITE_SHOP_API + API.PRODUCT.PRODUCTS,
    method: "GET",
    params: { page: pageIndex },
  });
};

export default { getAllProducts };
