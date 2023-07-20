import ApiInstance from "./index";
class ProductInstance extends ApiInstance {
  fetchProducts = async (page) => {
    const response = await this.instance.get(`/products?page=${page}`);

    return response.data.response;
  };

  getProductMyId = (id) => {
    return this.instance.get(`/products/${id}`);
  };
}

const productInstance = new ProductInstance();

export default productInstance;
