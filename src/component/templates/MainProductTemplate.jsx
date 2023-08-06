import ProductGrid from "../organisms/ProductGrid";
import { Suspense } from "react";
import { useState, useRef, useEffect } from "react";
import { useQuery } from "react-query";
import Loader from "../atoms/Loader";
import { fetchProducts } from "../../services/product";
import _ from "lodash";

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);
  const isFirstLoad = useRef(true);
  const bottomObserver = useRef(null);
  const [products, setProducts] = useState([]);
  const [isEnd, setIsEnd] = useState(false);

  const { data, error, isLoading } = useQuery(`/products?page=${page}`, () =>
    fetchProducts(page)
  );

  useEffect(() => {
   
    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isEnd) {
            setPage((page) => page + 1);
          }
        });
      },
      {
        root: null, 
        threshold: 1,
      }
    );
    const currentObserver = bottomObserver.current;
    if (!!currentObserver && !isFirstLoad.current && !isLoading) {
      io.observe(bottomObserver.current);
    }

    return () => {
      const currentObserver = bottomObserver.current;
      if (!!currentObserver) io.unobserve(currentObserver); // productGrid의 카드를 클릭하여 상품 상세 페이지로 이동 시 발생하는 useEffect에 의해 이미 사라진 observer를 unobserve하여 오류 발생 => 이를 해결하기 위해 옵저버.current가 정상적인 값일때만 unobserve하도록 수정
    };
  }, [isLoading, isEnd]);
  const MAX_RESPONSE_COUNT = 9;
  useEffect(() => {
    if (!isLoading && !!data) {
      setProducts(_.uniqBy([...products, ...data.data.response], "id"));
      if (data.data.response.length < MAX_RESPONSE_COUNT) setIsEnd(() => true);
    }
  }, [data, isLoading]);

  useEffect(() => {
    isFirstLoad.current = false;
  }, []);


  if (error) {
    console.log(error);
  }

//    // io.unobserve(bottomObserver.current)
//     }
//     return()=>{
//         io.unobserve(bottomObserver.current)
//     }
// }, [/*loading, page*/]);
// const { data, isLoading } = useQuery(["myData", pageNumber], () =>
// fetchProducts(pageNumber)
// );

    // useEffect(()=>{
    //     dispatch(getProducts(page));
    

    // }, [dispatch,page]); //의존성 배열 인자 없으면 최초 렌더링될때 한번만 실행
    //그냥 없으면 모든 렌더링에 실행
    // 안에있는 콜백함수가 실행
    return (
        <div className="w-full mx-auto px-32 pt-20">
          <Suspense fallback={<Loader />}>
            <ProductGrid products={products} isLoading={isLoading} />
            <div ref={bottomObserver}></div>
          </Suspense>
        </div>
      );
    };
export default MainProductTemplate;