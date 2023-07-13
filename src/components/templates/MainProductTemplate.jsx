import { useDispatch, useSelector } from "react-redux";
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { useEffect, useRef, useState } from "react";
import { getProducts } from "../../store/slices/productSlice";

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const bottomObserver = useRef(null);
  const dispatch = useDispatch();
  // 리덕스 스토어에서 프로덕트 정보 가져오기
  // index.js에서 선언한 product 모듈 내부 => product slice에서 선언한 products의 정보 가져오기
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const isEnd = useSelector((state) => state.product.isEnd);
  // 로딩, 에러 상태를 어떻게 관리할 것인가.
  // // 1. 과거의 방식
  // if (loading) return <div>로딩중...</div>
  // if (error) return <div>에러 발생!</div>
  // 2. 요즘의 방식
  // 리액트 쿼리를 이용하여 서스펜스로 감싸주어서 fallback을 지정하여 처리

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        // API 요청 결과가 10개 미만일 경우 더 이상의 요청은 의미X
        // => productSlice에서 요청 결과 개수 확인 후 isEnd를 true로 바꿔줌,
        // 이를 확인하여 더이상 요청을 보내지 않도록
        if (entry.isIntersecting && !isEnd) {
          setPage(page + 1);
        }
      });
    },
    {
      root: null, // 뷰포트로 루트 요소(기준)가 기본적으로 설정됨
      threshold: 1, // 임계점, 루트요소와 임계점 이상 겹치면 콜백 실행
      // 타겟 요소의 일정 부분이 루트 요소와 겹치면 콜백이 실행된다.
    }
  );
  //1. io.observe(bottomObserver.current); // 이렇게 코드를 작성하면 useEffect의 dependency를 안넣은 것 처럼 모든 렌더링 발생 시 실행됨 => 처리 필요
  //2. useEffect(() => {
  //   io.observe(bottomObserver.current);
  // }, []); // 이렇게 코드를 작성하면 observer에 의해 감지된 후 데이터가 로딩되는 도중(아직 컨텐츠 없음) 또 다시 감지되어 페이지가 무한대로 커지는 문제 발생(API에 수많은 요청 보냄) => 보호가 필요
  useEffect(() => {
    console.log("loading: ", loading);
    console.log("isFirstLoad: ", isFirstLoad);
    if (!isFirstLoad && !loading) {
      console.log("Observe!!");
      io.observe(bottomObserver.current);
    }
    setIsFirstLoad(false);
  }, [loading]); // 최초 렌더링 마운트 1회만(임시)

  // 컨텐츠 하단에 다다르면(감지) 추가적으로 데이터를 로드하고싶다.
  // page 값이 순차적으로 변화 => 의존성 배열에 들어가야 함.
  useEffect(() => {
    // dispatch(getProducts(0)); // 0번 페이지에 해당하는 프로덕트를 가져와 리덕스 스토어에 저장
    dispatch(getProducts(page)); // page에 해당하는 프로덕트를 가져와 리덕스 스토어에 저장
  }, [dispatch, page]); // 렌더링 발생 시 최초 1회만 실행 되도록 => page가 변화할 때마다 실행되도록 수정

  return (
    <Container>
      <div>{`${page}${loading}${isFirstLoad}`}</div>
      <ProductGrid products={products} />
      <div ref={bottomObserver}></div>
    </Container>
  );
};

export default MainProductTemplate;
