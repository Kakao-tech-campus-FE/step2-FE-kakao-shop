import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { getProducts } from "../../store/slices/productSlice";
import "../../styles/templates/MainProductTemplate.css"

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const { data: products, isLoading } = useQuery(
    [`products/page`, page],
    () => dispatch(getProducts(page)),
  );

  const loadPrevPage = () => {
      setPage((prevPage) => prevPage - 1);
    };
    
    const loadNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };
    const productArray = products?.payload?.response || [];
    
    useEffect(() => {
        dispatch(getProducts(page));
      }, [dispatch, page]);
  


  return (
    <Container className="productsView">
        {isLoading ? (
            <>
            <ProductGrid isLoading="true" products={productArray} />
          <div className="changePage">
                <button className="changePageButton" onClick={loadPrevPage} disabled={page === 0}>
                    &lt;
                </button>
                <button className="changePageButton" onClick={loadNextPage} disabled={page === 1}>
                    &gt;
                </button>
            </div>
            </>
        ) : (
            <>
            <ProductGrid products={productArray} />
            <div className="changePage">
                <button className="changePageButton" onClick={loadPrevPage} disabled={page === 0}>
                    &lt;
                </button>
                <button className="changePageButton" onClick={loadNextPage} disabled={page === 1}>
                    &gt;
                </button>
            </div>
            </>
        )}
        </Container>
  );
};

export default MainProductTemplate;
