/*
import { useDispatch, useSelector } from "react-redux"
import Container from "../atoms/Container";
import { Suspense, useEffect, useRef, useState } from "react";
import ProductGrid from "../organisms/ProductGrid";
import { getProducts } from "../../store/slices/productSlice";
import Loader from "../atoms/Loader";

const MainProductTemplate = () => {
    const [page, setPage] = useState(0);
    const bottomObserver = useRef(null);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const loading = useSelector((state) => state.product.loading);
    const error = useSelector((state) => state.product.error);
    const isEnd = useSelector((state) => state.product.isEnd);

    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting && !isEnd) {
                setPage((page) => page + 1);
            }
        })
    }, {threshold: 1})

    useEffect(() => {
        io.observe(bottomObserver.current);
    }, []);

    useEffect(() => {
        dispatch(getProducts(page));
    }, [dispatch, page]);

    return (
        <Container>
            <Suspense fallback={<Loader />}>
                <ProductGrid products={products} />
                <div ref={bottomObserver}></div>
            </Suspense>
        </Container>
    );
};
*/

import Container from "../atoms/Container";
import { Suspense, useEffect } from "react";
import ProductGrid from "../organisms/ProductGrid";
import Loader from "../atoms/Loader";
import { useInfiniteQuery } from "react-query";
import { fetchProducts } from "../../apis/product";
import { useInView } from "react-intersection-observer";
import SkeletonProductGrid from "../organisms/SkeletonProductGrid";

const MainProductTemplate = () => {
    const {ref, inView} = useInView();

    const {
        data : products,
        isLoading, 
        isFetchingNextPage, 
        fetchNextPage, 
        hasNextPage
      } = useInfiniteQuery('products', ({ pageParam = 0 }) => fetchProducts(pageParam), {
        getNextPageParam: (lastPage, allPages) => {
          if (lastPage.response && lastPage.response.length === 0) {
            return null;
          }
          return allPages.length;
        },
        onError: (error) => {
            switch(error.status) {
                case 300: 
                    alert(`에러 300: ${error.message}`);
                    break;
                case 400: 
                    alert(`에러 400: ${error.nessage}`);
                    break;
                case 500: 
                    alert(`에러 500: ${error.message}`);
                    break;
                default: 
                    alert(`에러: ${error.message}`);
                    break;
            }
        }
    });
    
    useEffect(() => {
        if(inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView]);

    return (
        <Container>
            <Suspense fallback={<SkeletonProductGrid />}>
                {isLoading ? <Loader /> : <ProductGrid products={products.pages.flatMap((page) => page.response)} />}
                <div ref={ref} className="h-3"></div>
                {isFetchingNextPage && <SkeletonProductGrid />}
            </Suspense>
        </Container>
    );
};

export default MainProductTemplate;