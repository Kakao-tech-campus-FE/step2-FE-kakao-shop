import { useState, useEffect } from "react";
import { fetchProducts } from "../apis/product";
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
      console.error("상품검색에 실패했습니다.");
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    const filteredProducts = allProducts.filter((product) =>
      product.productName.includes(searchQuery)
    );

    setSearchResults(filteredProducts);
  };

  return (
    <div className="px-20">
      <div className="flex justify-center mt-24 mb-8">
        <input
          type="text"
          className="bg-slate-50 rounded-sm max-w-xl w-[100%] h-10 mr-2"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="검색어를 입력하세요."
        />
        <button onClick={handleSearchClick} className="text-black">
          검색
        </button>
      </div>
      <ProductGrid products={searchResults} />
    </div>
  );
};

export default SearchPage;
