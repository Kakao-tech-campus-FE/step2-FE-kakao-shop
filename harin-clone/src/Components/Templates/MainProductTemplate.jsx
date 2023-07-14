import { useDispatch, useSelector} from "react-redux"
import Container from "../Atoms/Container"
import ProductGrid from "../Organisms/ProductGrid"
import { useEffect, useState, useRef } from "react";
import { getProducts } from '../../Store/Slices/productSlice'
import { useInfiniteQuery } from '@tanstack/react-query';
import Loader from "../Atoms/Loader";


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
      if (isEnd) return ;
      if (!loading && entry.isIntersecting && bottomObserver.current) {
        setPage((page) => page + 1);
        console.log('page: '+page)
      }
    })
  }, {
    threshold: 0.5,
  }
  )

  useEffect(() => {
    io.observe(bottomObserver.current);
  }, [loading]) // 최초 마운트 시에만...

  useEffect(() => { 
    dispatch(getProducts(page))
  }, [dispatch, page])


  return (
    <Container >
        {loading && <Loader/> } 
        {error && <p>Error</p>}

        <ProductGrid products={products} />
        <div ref={bottomObserver}></div>
    </Container>
  )
}

export default MainProductTemplate