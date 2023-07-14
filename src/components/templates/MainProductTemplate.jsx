import ProductGrid from "../organisms/ProductGrid";

import '../../styles/templates/mainProductTemplate.css';

import {useEffect, useMemo, useRef, useState} from "react";
import {useInfiniteQuery} from "react-query";

import useProducts from "../../hooks/useProducts";
import {fetchProductsByPage} from "../../services/product";
import ErrorSign from "../atoms/ErrorSign";
import SkeletonProductGrid from "../organisms/SkeletonProductGrid";

const MainProductTemplate = ({children}) => {

    const bottomObserver = useRef(null);
    const {products, addProducts} = useProducts()
    const [throat, setThroat] = useState(false)

    const {isLoading, isError, error, data, fetchNextPage} = useInfiniteQuery(
        "products",
        async ({pageParam = 0}) => {
            return fetchProductsByPage(pageParam)
        },
        {
            getNextPageParam: (lastPage, pages) => {
                if (lastPage?.data.response.length < 9) {
                    return undefined;
                } else {
                    return pages?.length;
                }
            }
        }
    )

    const io = useMemo(() => {
            return new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        if (!throat) {
                            setThroat(true)
                            fetchNextPage()
                                .then(
                                    (res) => {
                                        addProducts(res.data.pages.flatMap(page => page.data.response))
                                    }
                                )
                                .finally(() => {
                                        setThroat(false)
                                    }
                                )
                        }
                    }
                },
                {
                    root: null,
                    threshold: 1,
                    rootMargin: "80px"
                }
            )
        }, [throat, fetchNextPage]
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
            {isLoading && <SkeletonProductGrid skeletonAmount={12}/>}
            {isError && <ErrorSign error={error}/>}
            {!throat && <div className="bottom-observer" ref={bottomObserver}></div>}
        </div>
    );
}

export default MainProductTemplate;