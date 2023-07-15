import ProductCard from "../molecules/ProductCard";
import {useInfiniteQuery} from "react-query";
import {useInView} from 'react-intersection-observer'
import {getProducts} from "../../services/apis";
import {Fragment, useEffect} from "react";

const ShopCardList = () => {
    const {ref, inView} = useInView()

    const {
        status,
        data,
        error,
        isFetching,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery(
        ['products'],
        getProducts,
        {
            getNextPageParam: (lastPage) => lastPage.nextPage,
        },
    )

    useEffect(() => {
        if (inView && hasNextPage && !isFetching) {
            fetchNextPage()
        }
    }, [inView])

    if (status === "loading") return <div>loading</div>
    if (status === "error") return <div>{error.message}</div>
    return (
        <div className="w-full flex flex-wrap">
            {data.pages.map((page) => (
                <Fragment key={"page" + page.nextPage}>
                    {page.data.map(function (project) {
                        const {id, productName, image, price} = project;
                        return <ProductCard key={"card" + id} id={id} title={productName}
                                            image={image} price={price}/>

                    })}
                </Fragment>
            ))}
            <div ref={ref}>
                {isFetching ? "loading" : null}
            </div>
        </div>
    );
}

export default ShopCardList;