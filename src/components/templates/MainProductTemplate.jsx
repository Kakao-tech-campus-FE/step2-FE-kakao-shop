import { useState, useEffect, useRef, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slices/productSlice";
import Loader from "../atoms/Loader";

// components
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";

const MainProductTemplate = () => {
    const [page, setPage] = useState(0);
    const bottomObserver = useRef(null);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);
    const isEnd = useSelector((state) => state.products.isEnd);
    
    const io = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if(!entry.isIntersecting) return;

                if(!loading && entry.isIntersecting && !isEnd && bottomObserver.current) {
                    setPage((page) => page + 1);
                }
            });
        },
        { threshold: 1 }
    );

    useEffect(() => {
        io.observe(bottomObserver.current);
    }, []); // 최초 렌더링 마운트 1회만 선언

    useEffect(() => {
        if(isEnd) return;
        
        dispatch(getProducts(page));
    }, [dispatch, page]);


    return (
        <Container>
            {loading && <Loader />}
            <ProductGrid products={products} />
            <div ref={bottomObserver}></div>
        </Container>
    )
}

export default MainProductTemplate;

{/* <Container>
    <Suspense fallback={<Loader />}>
        <ProductGrid products={products} />
        <div ref={bottomObserver}></div>
    </Suspense>
</Container> */}