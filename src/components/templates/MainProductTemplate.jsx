import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { useEffect, useRef, useState } from "react";
import { fetchProducts } from "../../services/api/product";
import { useQuery } from "react-query";
import _ from "lodash";
import ErrorTypo from "../atoms/ErrorTypo";

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);
  //const [isFirstLoad, setIsFirstLoad] = useState(true);
  const isFirstLoad = useRef(true);
  const bottomObserver = useRef(null);
  //const dispatch = useDispatch();
  // 리덕스 스토어에서 프로덕트 정보 가져오기
  // index.js에서 선언한 product 모듈 내부 => product slice에서 선언한 products의 정보 가져오기
  // react-query 적용 이전 코드
  // const products = useSelector((state) => state.product.products);
  // const loading = useSelector((state) => state.product.loading);
  // const error = useSelector((state) => state.product.error);
  //const isEnd = useSelector((state) => state.product.isEnd);

  // 로딩, 에러 상태를 어떻게 관리할 것인가.
  // // 1. 과거의 방식
  // if (loading) return <div>로딩중...</div>
  // if (error) return <div>에러 발생!</div>
  // 2. 요즘의 방식
  // 리액트 쿼리를 이용하여 서스펜스로 감싸주어서 fallback을 지정하여 처리
  // HomePage에서 MainProductTemplate를 suspense로 감싸주어 처리
  const [products, setProducts] = useState([]);
  const [isEnd, setIsEnd] = useState(false);

  const { data, error, isLoading } = useQuery(`/products?page=${page}`, () =>
    fetchProducts(page)
  );

  //1. io.observe(bottomObserver.current); // 이렇게 코드를 작성하면 useEffect의 dependency를 안넣은 것 처럼 모든 렌더링 발생 시 실행됨 => 처리 필요
  //2. useEffect(() => {
  //   io.observe(bottomObserver.current);
  // }, []); // 이렇게 코드를 작성하면 observer에 의해 감지된 후 데이터가 로딩되는 도중(아직 컨텐츠 없음) 또 다시 감지되어 페이지가 무한대로 커지는 문제 발생(API에 수많은 요청 보냄) => 보호가 필요
  useEffect(() => {
    //console.log("loading: ", loading);
    //console.log("isFirstLoad: ", isFirstLoad);

    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          // API 요청 결과가 10개 미만일 경우 더 이상의 요청은 의미X
          // => productSlice에서 요청 결과 개수 확인 후 isEnd를 true로 바꿔줌,
          // 이를 확인하여 더이상 요청을 보내지 않도록
          if (entry.isIntersecting && !isEnd) {
            // IO에서 isEnd의 값을 제대로 참조하지 못하고 항상 초기 값으로 인식하는 문제가 발생 => 여러 시도를 해봤지만 어떻게 해결해야할지 모르겠어서 isEnd가 true일때, bottomObserver인 div를 표현하지 않도록 구현했다. {!isEnd && <div ref={bottomObserver}></div>}
            setPage((page) => page + 1);
          }
        });
      },
      {
        root: null, // 뷰포트로 루트 요소(기준)가 기본적으로 설정됨
        threshold: 1, // 임계점, 루트요소와 임계점 이상 겹치면 콜백 실행
        // 타겟 요소의 일정 부분이 루트 요소와 겹치면 콜백이 실행된다.
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
  }, [isLoading, isEnd]); // 첫 번째 로딩이 끝난 후 observe가 시작될 수 있도록 처리

  const MAX_RESPONSE_COUNT = 9; //페이지를 param으로 전달 시 api 응답 결과의 개수(최대 9개), 마지막 페이지에 다다르면 9개 미만의 응답 결과
  useEffect(() => {
    //console.log("data: ", data);
    if (!isLoading && !!data) {
      setProducts(_.uniqBy([...products, ...data.data.response], "id"));
      if (data.data.response.length < MAX_RESPONSE_COUNT) setIsEnd(() => true);
    }
  }, [data, isLoading]);

  useEffect(() => {
    isFirstLoad.current = false;
  }, []);

  // 컨텐츠 하단에 다다르면(감지) 추가적으로 데이터를 로드하고싶다.
  // page 값이 순차적으로 변화 => 의존성 배열에 들어가야 함.
  //useEffect(() => {
  // dispatch(getProducts(0)); // 0번 페이지에 해당하는 프로덕트를 가져와 리덕스 스토어에 저장
  //dispatch(getProducts(page)); // page에 해당하는 프로덕트를 가져와 리덕스 스토어에 저장
  //console.log("page useEffect: ", page);
  // setProducts(() => {
  //   const newProducts = data.data.response;
  //   console.log("newProducts : ", newProducts);
  //   return _.uniqBy([...products, ...newProducts], "id");
  // });
  //}, [page]); // 렌더링 발생 시 최초 1회만 실행 되도록 => page가 변화할 때마다 실행되도록 수정
  //console.log("Products:", products);

  if (error) {
    return <ErrorTypo />;
  }

  return (
    <Container className="w-full px-24 py-16 m-auto">
      <ProductGrid products={products} isLoading={isLoading} />
      <div ref={bottomObserver}></div>
    </Container>
  );
};

export default MainProductTemplate;
