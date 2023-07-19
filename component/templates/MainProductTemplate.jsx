import { useEffect, useState, useRef } from "react"
import Container from "../atoms/Container"
import ProductGrid from "../organisms/ProductGrid"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../src/services/product"

const MainProductTemplate = () => {
    const [page, setPage] = useState(0);
    const bottomObserver = useRef(null);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products)
    // const isEnd = useSelector((state) => state.product.isEnd)
    const loading = useSelector((state) => state.product.loading)
    //const error = useSelector((state) => state.product.error)

    const io = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                
                if (!loading && entry.isIntersecting && bottomObserver.currnet){
                    setPage((page) => page + 1)
                }
            });
        },
        {
            threshold: 1,
        }
    );

    useEffect(() => {
        io.observe(bottomObserver.current)
    });

    useEffect(() => {
        dispatch(getProducts(page))
        // 안에 있는 콜백 함수가 실행
    }, [dispatch, page]) //dependency array, 의존성 배열

    return (
        <Container>
            <ProductGrid products={products} />
            <div ref={bottomObserver}></div>
        </Container>
    )

}

export default MainProductTemplate;