import { useDispatch, useSelector } from "react-redux"
import Container from "../atoms/Container"
import ProductGrid from "../organisms/ProductGrid";
import { Suspense } from "react";
import { getProducts } from "../../store/slices/ProductSlice";
import { useState, useRef, useEffect } from "react";
import { useQuery } from "react-query";
import Loader from "../atoms/Loader";
import { fetchProducts } from "../../services/product";

const MainProductTemplate=()=>{
    const [page, setPage] = useState(0);
    const dispatch=useDispatch();
    const bottomObserver=useRef(null);
    const products=useSelector((state)=> state.product.products);
    const loading=useSelector((state)=> state.product.loading);
    const error=useSelector((state)=> state.product.error);
    const isEnd= useSelector((state)=>state.product.isEnd);

const io = new IntersectionObserver(
    (entries, observer)=>{
        entries.array.forEach((entry) => {
            if(entry.isIntersecting && !isEnd){
                setPage((page)=>page+1);
            }
        });
    },{
        threshold:1,
    }
);
  const [pageNumber, setPageNumber] = useState(
    !isNaN(page) ? parseInt(page, 10) : 0
  );
  const loadMore = async () => {
    setPageNumber((prev) => prev + 1);
  };

useEffect(()=>{
    if(!loading&& page ===0){

    io.observe(bottomObserver.current);

   // io.unobserve(bottomObserver.current)
    }
    return()=>{
        io.unobserve(bottomObserver.current)
    }
}, [/*loading, page*/]);
const { data, isLoading } = useQuery(["myData", pageNumber], () =>
fetchProducts(pageNumber)
);

    useEffect(()=>{
        dispatch(getProducts(page));
    

    }, [dispatch,page]); //의존성 배열 인자 없으면 최초 렌더링될때 한번만 실행
    //그냥 없으면 모든 렌더링에 실행
    // 안에있는 콜백함수가 실행
    return (
        <div className="w-full mx-auto px-32 pt-20">
          {isLoading && <Loader />}
          <Suspense fallback={<Loader />}>
            <ProductGrid products={products} loading={isLoading} />
            <div ref={bottomObserver}></div>
          </Suspense>
        </div>
      );
    };
export default MainProductTemplate;