import { useDispatch, useSelector} from "react-redux"
import Container from "../Atoms/Container"
import ProductGrid from "../Organisms/ProductGrid"
import { useEffect, useState, useRef } from "react";
import { getProducts } from '../../Store/Slices/productSlice'
import { useInfiniteQuery } from '@tanstack/react-query';
import Loader from "../Atoms/Loader";
import ProductSkeleton from "../Atoms/Skeleton";



const MainProductTemplate = () => {
  const [page, setPage] = useState(0);
  const bottomObserver = useRef(null);

  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const isEnd = useSelector((state) => state.product.isEnd);

  const dispatch = useDispatch();

  //bottomObserver.current && !loading &&  !isEnd  && bottomObserver.current
  // intersection observer


  useEffect(() => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        // if (!entry.isIntersecting) return;
        if (!isEnd && !loading && entry.isIntersecting) {
          console.log("페이지 여기서" + page);
          console.log(bottomObserver.current)
          setTimeout(setPage((page) => page + 1), 5000);
          console.log('페이지 넘어감: ' + page);
        }
      })
      }, {
        threshold: 0.5,
      }
    )
    io.observe(bottomObserver.current);
  }, [loading]) // 최초 마운트 시에만...

  useEffect(() => { 
    dispatch(getProducts(page))
  }, [dispatch, page])

 
  // const { data, fetchNextPage, hasNextPage, isLoading, isError } = useInfiniteQuery(
  //   ['page'], 
  //   ({ pageParam = 0 }) => getProducts(pageParam),
  //   {
  //     getNextPageParam: (lastPage, allPages) => {
  //       const nextPage = allPages.length + 1;
  //       return lastPage.data.length === 0 ? null : nextPage;
  //   },
  //   }
  // )
{/* <Loader/> &&  */}

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