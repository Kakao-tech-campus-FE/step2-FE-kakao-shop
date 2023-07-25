import { useEffect, useRef, Suspense } from "react";
import { fetchProducts } from "../../services/product";
import { useInfiniteQuery } from "react-query";
import Loader from "../atoms/Loader";
import SkeletonGrid from "../organisms/SkeletonGrid";

// components
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";

const MainProductTemplate = () => {
    const bottomObserver = useRef(null);
    const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
        'productsData',
        ({pageParam=0})=> fetchProducts(pageParam),
        {
            getNextPageParam: (curPage,allPages)=>{
                return (curPage.data.response.length===9? allPages.length : undefined);
            },
        }
    );

    const productList = [];
    data?.pages.forEach((page)=> 
    page.data.response.forEach((data)=>{
        productList.push(data)
    }))
    
    useEffect(() => {
        const io = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if(!entry.isIntersecting) return;
                    if (entry.isIntersecting && hasNextPage && bottomObserver.current) {
                        console.log("not working")
                        fetchNextPage();
                    }
                });
            },
            { threshold: 0.5 }
        );

        io.observe(bottomObserver.current);
        return () => io.disconnect();
    }, []); // 최초 렌더링 마운트 1회만 선언

    return (
        <>
            
            <Container>
                <Suspense fallback={<Loader />}>
                    <ProductGrid products={productList} />
                </Suspense>
                <div ref={bottomObserver}></div>
            </Container>
        </>
    )
}

export default MainProductTemplate;