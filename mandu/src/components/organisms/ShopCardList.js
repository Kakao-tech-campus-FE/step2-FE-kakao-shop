import {ProductCard, SkeletonProductCard} from "../molecules/ProductCard";
import {useInfiniteQuery} from "react-query";
import {useInView} from 'react-intersection-observer'
import {getProducts} from "../../services/apis";
import {Fragment, useEffect} from "react";

const ShopCardList = () => {
    const {ref, inView} = useInView()

    const {
        status, data, error, fetchNextPage, hasNextPage, isFetching
    } = useInfiniteQuery(
        ['products'],
        getProducts,
        {
            getNextPageParam: (lastPage) => lastPage.nextPage,
        },
    )

    useEffect(() => {
        if (inView && hasNextPage && !error) {
            fetchNextPage()
        }
    }, [inView])


    if (status === "error") return <div className="text-center">{error.message}</div>
    return (
        <div className="flex flex-wrap">
            {status === "loading" ?
                <SkeletonProductCardList/>
                :
                <ProductCardList
                    data={data}
                    ref={ref}
                    isFetching={isFetching}
                    error={error}
                    hasNextPage={hasNextPage}
                />
            }
        </div>
    );
}

const ProductCardList = ({data, ref, isFetching, error, hasNextPage}) => {
    return (
        <>
            {data.pages.map((page) => (
                <Fragment key={"page" + page.nextPage}>
                    {page.data.map(function (project) {
                        const {id, productName, image, price} = project;
                        return <ProductCard key={"card" + id} id={id} title={productName}
                                            image={image} price={price}/>
                    })}
                </Fragment>
            ))}
            <div ref={ref} className="text-center">
                {isFetching ? "loading" : error ? error.message : hasNextPage ? "더보기" : ""}
            </div>
        </>
    )
}

const SkeletonProductCardList = () => {
    return (
        <>
            {Array(9).fill(0).map((_, index) => (
                <SkeletonProductCard key={"skeleton" + index}/>
            ))}
        </>
    );
}

export default ShopCardList;