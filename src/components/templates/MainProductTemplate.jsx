import { Suspense, useEffect } from "react";
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { fetchProducts } from "../../services/product";
import { useInfiniteQuery } from "@tanstack/react-query";
import CardSkeleton from "../atoms/CardSkeleton";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

const MainProductTemplate = () => {
    const {ref, inView} = useInView();
    const {
        data: products, 
        isLoading, 
        isFetchingNextPage, 
        fetchNextPage, 
        hasNextPage
    } = useInfiniteQuery(['products'], ({pageParam = 0}) => fetchProducts(pageParam), {
        getNextPageParam: (lastPage, pages) => {
            if(lastPage.response && lastPage.response.length === 0) {
                return null;
            }
            return pages.length;
        },
        onError: (error) => {
            console.error("fetch product 실패", error);
            alert("네트워크 연결이 원활하지 않습니다.");
            fetchNextPage();
        },
        enabled:true,
    }); 

    useEffect(() => {
      if (inView && !isLoading && hasNextPage) { // !isLoading 추가
        fetchNextPage();
      }
    }, [inView, isLoading, hasNextPage]);
    
    const bottomObserverRef = useRef(null);

    useEffect(() => {
      const handleObserver = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && hasNextPage) {
            fetchNextPage();
          }
        });
      };
  
      const io = new IntersectionObserver(handleObserver, {
        threshold: 0.5,
      });
  
      if (bottomObserverRef.current) {
        io.observe(bottomObserverRef.current);
      }
  
      return () => {
        io.disconnect();
      };
    }, [bottomObserverRef, fetchNextPage, hasNextPage]);
  
    return(
        <Container className="mainproduct">
            <Suspense fallback={<><CardSkeleton /></>}>
                {isLoading ? (<CardSkeleton />) :  <ProductGrid products={products.pages.flatMap(page => page.response)}/>}
                <div ref={ref}></div>
                {isFetchingNextPage && <CardSkeleton />}
            </Suspense>
        </Container>
    );
};

export default MainProductTemplate;