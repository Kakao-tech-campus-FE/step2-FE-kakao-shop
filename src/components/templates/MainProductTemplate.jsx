import { useEffect } from "react";
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { fetchProducts } from "../../apis/product";
import { useInfiniteQuery } from "react-query";
import MainPageSkeleton from "../molecules/MainPageSkeleton";
import { useInView } from "react-intersection-observer";
import ErrorPage from "../../pages/ErrorPage";

const MainProductTemplate = () => {
    const {ref, inView} = useInView();
    const {data: products, 
        isFetchingNextPage, 
        fetchNextPage, 
        hasNextPage,
        isError,
        error,
    } = useInfiniteQuery(['products'], ({pageParam = 0}) => fetchProducts(pageParam), {
        getNextPageParam: (lastPage, pages) => {
            if(lastPage.response && lastPage.response.length === 0) {
                // 마지막 페이지일 경우 NULL을 반환하여 더 이상 페이지를 불러오지 않음
                return null;
            }
            // 다음 페이지를 요청하기 위해 현재 페이지의 개수를 계산하여 반환
            return pages.length + 1;
        },
        onError: (error) => {
            if(error?.status) {
                switch(error.status) {
                    case 300: console.error(`something went wrong 300: ${error.message}`);
                    break;
                    case 400: console.error(`something went wrong 400: ${error.nessage}`);
                    break;
                    case 500: console.error(`something went wrong 500: ${error.message}`);
                    break;
                    default: console.error(`something went wrong: ${error.message}`);
                }
            } else {
                console.error('Unknown error occurred: ', error);
            }
        },
    }); // 구분자, API 요청 함수

    useEffect(() => {
        if(inView && hasNextPage) {
            fetchNextPage();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);
    
    return(
        <Container>
            {isError ? <ErrorPage error={error.status}/> : null}
            {products ? 
                <ProductGrid products={products.pages.flatMap(page => page.response)} />
                : <MainPageSkeleton />}
            <div ref={ref}></div>
            {isFetchingNextPage && <MainPageSkeleton />}
        </Container>
    );
};

export default MainProductTemplate;