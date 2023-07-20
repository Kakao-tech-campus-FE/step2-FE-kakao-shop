import { useSelector, useDispatch } from "react-redux"
import Container from "../atoms/Container"
import ProductGrid from "../organisms/ProductGrid"
import { Suspense, useEffect, useRef, useState } from "react"
import { getProducts } from "../../store/slices/productSlice"

const MainProductTemplate = () => {
    const [page, setPage] = useState(0)
    const bottomObserver = useRef(null)
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const loading = useSelector((state) => state.product.loading);
    const error = useSelector((state) => state.product.error);
    const isEnd = useSelector((state) => state.product.isEnd)

    const io = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !isEnd) {
                    setPage((page) => page + 1)
                }
            })
        },
        {
            threshold: 1,
        }
    );

    useEffect(() => {
        io.observe(bottomObserver.current)
    }, [])

    useEffect(() => {
        dispatch(getProducts(page))
    }, [dispatch, page])

    return (
        <Container>
            <ProductGrid products={products} />
            <div ref={bottomObserver}></div>
        </Container>
    )
}

export default MainProductTemplate