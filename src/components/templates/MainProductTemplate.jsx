import ProductGrid from "../organisms/ProductGrid";
import Loader from "../atoms/Loader";

import '../../styles/mainProductTemplate.css';

import {useEffect, useRef, useState} from "react";
import {useInfiniteQuery} from "react-query";

import useProducts from "../../hooks/useProducts";
import {fetchProductsByPage} from "../../services/product";
import ErrorSign from "../atoms/ErrorSign";


const MainProductTemplate = ({children}) => {

    const bottomObserver = useRef(null);
    const {products, addProducts} = useProducts()
    const [isEnd, setIsEnd] = useState(false);


    const {isLoading, isError, error, data, fetchNextPage} = useInfiniteQuery(
        "products",
        async ({pageParam = 0}) => {
            return await fetchProductsByPage(pageParam)
        },
        {
            getNextPageParam: (lastPage, pages) => {
                if (lastPage.data.response.length < 9) {
                    return undefined;
                } else {
                    return pages.length;
                }
            }
        }
    )

    const io = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                fetchNextPage().then(
                    (res) => {
                        addProducts(res.data.pages.flatMap(page => page.data.response))
                    }
                )
            }
        },
        {
            root: null,
            threshold: 1,
            rootMargin: "80px"
        }
    )

    useEffect(() => {
            if (bottomObserver.current) {
                io.observe(bottomObserver.current)
            }
        }, [io]
    )

    return (
        <div className="main-product-template">
            {data && <ProductGrid products={products}/>}
            {isLoading && <Loader/>}
            {isError && <ErrorSign error={error}/>}
            <div className="bottom-observer" ref={bottomObserver}></div>
        </div>
    );
}

export default MainProductTemplate;