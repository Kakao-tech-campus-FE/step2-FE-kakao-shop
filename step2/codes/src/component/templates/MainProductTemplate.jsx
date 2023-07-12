import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slices/productSlice";
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";

const MainProductTemplate =() => {
    const [page, setPage] = useState(0);
    const bottomObsever = useRef(null);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    // const loading = useSelector((state) => state.product.loading);
    // const error = useSelector((state) => state.product.error);
    const isEnd = useSelector((state) => state.product.isEnd);
    
    const io = new IntersectionObserver((entries, observer) => {
            entries.forEach((entrie) => {
                if (entrie.isIntersecting && !isEnd) { 
                    setPage((page) => page + 1)
                }
            })
        }, {threshold: 1}
    );

    useEffect(() => {
        io.observe(bottomObsever.current);
    }, []) //최초 렌더링 마운트 1회만 선언


    // 컨텐츠 하단에 다다르면(감지) 추가적으로 데이터로드 | page > 의존성 배열에 들어가야 함
    useEffect(() => {
        dispatch(getProducts(page));
    }, [dispatch, page])

    return (
    <Container>
        <ProductGrid products={products}/>
        <div ref={bottomObsever}></div>
    </Container>
    )
}


export default MainProductTemplate;
