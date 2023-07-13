import { useDispatch, useSelector} from "react-redux"
import Container from "../Atoms/Container"
import ProductGrid from "../Organisms/ProductGrid"
import { Suspense, useEffect } from "react";
import { getProducts } from '../../Store/Slices/productSlice'
import { useState, useRef } from "react";

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);
  const bottomObserver = useRef(null);

  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const isEnd = useSelector((state) => state.product.isEnd);

  const dispatch = useDispatch();

  // intersection observer
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return ;

      if (!loading && entry.isIntersecting && bottomObserver.current) {
        console.log('감지')
        setPage((page) => page + 1);
      }
    })
  }, {
    threshold: 0.1,
  }
  )


  useEffect(() => {
    io.observe(bottomObserver.current);
  }, [loading]) // 최초 마운트 시에만...

  useEffect(() => { 
    dispatch(getProducts(page));
  }, [dispatch, page])


  return (
    <Container >
      {/* <Suspense fallback={<Loader />}> */}
        {loading && <p>Loading...</p>}
        {error && <p>Error</p>}
        <ProductGrid products={products} />
        <div ref={bottomObserver}></div>
      {/* </Suspense> */}
    </Container>
  )
}

export default MainProductTemplate