import instance from "./instance";

const getProduct = (id) => {
  instance.get(`/product?page=${id}`).then((response) => {
    console.log(response);
  });
};
