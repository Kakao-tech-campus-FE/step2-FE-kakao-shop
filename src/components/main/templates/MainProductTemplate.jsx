import React, { useEffect, useRef } from "react";
import Container from "../../common/atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import Loader from "../../common/atoms/Loader";
import useFetchProducts from "../../../hooks/useFetchProducts";

export default function MainProductTemplate() {
  const bottomObserver = useRef(null);
  const {
    isFetchingNextPage, // 다음 페이지를 가져오는 요청이 진행 중인지 여부
    error,
    hasNextPage,
    isLoading,
    fetchNextPage,
    products,
    isFetching,
  } = useFetchProducts();

  useEffect(() => {
    // console.log("MainProductTemplate products", products);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 },
    );
    if (bottomObserver.current && hasNextPage) {
      io.observe(bottomObserver.current);
    }
    return () => {
      io.disconnect();
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, products]);

  useEffect(() => {
    if (error) {
      console.error(error.message);
      alert("서버에 문제가 있습니다. 잠시 후 다시 시도해주세요.");
    }
  }, [error]);

  if (isLoading) return <Loader />;
  return (
    <Container className=" flex flex-col items-center justify-center ">
      {products && <ProductGrid products={products} isFetching={isFetching} />}
      <div ref={bottomObserver}></div>
    </Container>
  );
}

// ⭐️ api 요청을 하는 컴포넌트는 loading, error State에 대한 처리를 해야한다.

// ⭐️ IntersectionObserver
// - IntersectionObserver 객체는 생성시점의 변수 값만을 참조한다
// - 이후 변수 값이 변경되어도 변경된 값을 참조하지 않음 -> isEnd를 참조 못함
// - 객체를 다시 생성하고 업데이트 해줘야함
// - 감시하는 요소가 나타날시 콜백 수행
// - isInterSecting ? true: 화면에 보일 때, false: 화면에서 사라졌을 떄
// - threshold: 임계점(0 ~ 1) 로드되는 시점을 타겟이 보이는 비율에 따라 설정

// ⭐️ Infinite Scroll
// - 컨텐츠 하단에 다다르면 추가적으로 데이터를 로드

// 🔥 bottomObserver를 감시하는 시점
// 기존의 방식: useEffect에 빈 배열을 주고 observe(bottomObserver)하는 방식
// 문제점 1): product의 response가 비동적으로 응답이 다 완료되지도 않은 시점(리렌더링X)에서 observe를 수행함
// 문제점 2): 처음부터 감시하면 page0에 대한 비동기 응답이 오기 전에 io의 콜백을 수행할 수 있음
// 요구사항: 렌더링이 완료된 시점에 observe를 수행해야함
// 해결방안: 렌더링이 완료된 시점을 State로 관리하고 그 시점에 observe를 수행함

// ⭐️ 페이지네이트(paginated)된 데이터
// - 페이지 값에 따라서 리턴된 데이터
// - 변경이 자주 있어서는 안되며 무한스크롤에는 완전히 적합하지 않다
// - 변경이 있으면 중복된 데이터가 발생할 가능성이 있음 -> cursor(index:가장 마지막으로 가져온 요소)를 기준으로 몇개를 가져온다
