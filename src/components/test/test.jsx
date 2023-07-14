import { fetchProducts } from "../../services/product";

const Testdata = async () => {
  try {
    const data = await fetchProducts(2);
    return data;
  } catch (error) {
    console.log(error);
  }
};

console.log("test data");
console.log(Testdata());

export default Testdata;
