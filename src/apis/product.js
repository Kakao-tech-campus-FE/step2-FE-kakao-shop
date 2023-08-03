import ApiInstance from "./index";
class ProductInstance extends ApiInstance {
  fetchProducts = async (page) => {
    const response = await this.instance.get(`/products?page=${page}`);

    return response.data.response;
  };

  getProductById = async (id) => {
    const response = await this.instance.get(`/products/${id}`);

    return response.data.response;
  };
}

const productInstance = new ProductInstance(
  process.env.REACT_APP_API_URL,
  "application/json"
);

export default productInstance;
