import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { useRef, useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { fetchProducts } from "../../services/product";
import _ from "lodash";
import Loader from "../atoms/Loader";

const MainProductTemplate = () => {
    const bottomObserver = useRef(null);
    const observerRef = useRef();

    const { fetchNextPage, hasNextPage, isFetching, data } = useInfiniteQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage.data.response.length == 0) {
                return undefined;
            }
            return lastPage.page + 1;
        },
        keepPreviousData: true,
    });

    const io = (entires, observer) => {
        entires.forEach((entry) => {
            if (
                !isFetching &&
                entry.isIntersecting &&
                bottomObserver.current &&
                hasNextPage
            ) {
                console.log(data);
                observer.unobserve(entry.target);
                fetchNextPage();
            }
        });
    };

    const getProducts = () => {
        let products = [];
        data.pages.forEach((page, pageIndex) => {
            products.concat(page.data.response);
            products = _.uniqBy([...products, ...page.data.response]);
        });
        console.log(products);
        return <ProductGrid products={products} />;
    };

    useEffect(() => {
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        observerRef.current = new IntersectionObserver(io);
        bottomObserver && observerRef.current.observe(bottomObserver.current);
    }, [isFetching]);

    return (
        <Container style={{ paddingTop: "80px" }}>
            <Loader isLoading={isFetching}></Loader>
            {data ? getProducts() : ""}
            <div ref={bottomObserver}></div>
        </Container>
    );
};

export default MainProductTemplate;
