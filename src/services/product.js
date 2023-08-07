import instance from "./api";

export const fetchProductsByPage = (page) => {
  return instance.get(`/products?page=${page}`).catch((error) => {
    if (error.response) {
      console.log("error.response", error.response);
      const { status, data } = error.response;
      if (status === 400) {
        return Promise.reject(data);
      }
      return Promise.reject(error);
    }
  });
};

export const getProductById = (id) => {
  if (!id) {
    throw Error("id is null");
  }
  return instance.get("/products/" + id);
};
