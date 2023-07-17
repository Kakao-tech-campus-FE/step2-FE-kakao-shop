import {ProductCard, SkeletonProductCard} from "../molecules/ProductCard";
import {useInfiniteQuery} from "react-query";
import {useInView} from 'react-intersection-observer'
import {getProducts} from "../../services/apis";
import {Fragment, useEffect} from "react";
import Loader from "../atoms/Loader";

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
        if (inView && hasNextPage) {
            fetchNextPage()
        }
    }, [inView, fetchNextPage, hasNextPage])


    if (status === "error") return <div className="text-center">{error.message}</div>
    return (
        <div className="flex flex-wrap">
            {status === "loading" ?
                <SkeletonProductCardList/>
                :
                <ProductCardList
                    data={data}
                />
            }
            <div ref={ref} className="text-center w-full">
                {isFetching ? <Loader/> : error ? error.message : ""}
            </div>
        </div>
    );
}

const ProductCardList = ({data}) => {
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