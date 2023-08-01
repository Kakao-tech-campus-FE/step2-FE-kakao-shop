import { useState, useEffect } from "react";
import { fetchProducts } from "../apis/product";
import { comma } from "../utils/convert";
import ProductGrid from "../components/organisms/ProductGrid";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    try {
      const response = await fetchProducts(0);
      if (response.data && response.data.response) {
        setAllProducts(response.data.response);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    // Filter products based on the search query
    const filteredProducts = allProducts.filter((product) =>
      product.productName.includes(searchQuery)
    );

    setSearchResults(filteredProducts);
  };

  console.log(searchResults);

  return (
    <div className="mt-40">
      <input
        type="text"
        className="bg-yellow-100"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearchClick}>Search</button>

      <ProductGrid products={searchResults} />
    </div>
  );
};

export default SearchPage;
