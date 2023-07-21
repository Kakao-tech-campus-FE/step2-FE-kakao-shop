import API from "@/constants/API.js";
import instance from "@/api/instance.js";

const getAllProducts = async ({ pageIndex }) => {
  return instance({
    url: API.PRODUCT.PRODUCTS,
    method: "GET",
    params: { page: pageIndex },
  });
};

const getProductById = async ({ productId }) => {
  return instance({
    url: `${API.PRODUCT.PRODUCTS}/${productId}`,
    method: "GET",
  });
};

export default { getAllProducts, getProductById };
