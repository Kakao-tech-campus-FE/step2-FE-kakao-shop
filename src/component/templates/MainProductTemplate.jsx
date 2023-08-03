import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { getProducts } from "../../store/slices/productSlice";
import "../../styles/templates/MainProductTemplate.css"

const staticServerUrl = process.env.REACT_APP_PATH || "";
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
        {/* <Carousel className="carousel"/> */}
        <img src={staticServerUrl + "/carouselItem1.jpeg"} alt="" />
        {isLoading ? ( //로딩 중일 경우 isLoading이 true가 되면서 skeleton card를 출력
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
