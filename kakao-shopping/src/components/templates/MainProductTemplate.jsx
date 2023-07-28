import Container from "../atoms/Container";
import Photo from "../atoms/Photo";
import ProductGrid from "../organisms/ProductGrid";
import { useRef, useEffect, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { fetchProducts } from "../../services/product";
import _ from "lodash";
import Loader from "../atoms/Loader";
import { Carousel } from "react-bootstrap";

const MainProductTemplate = () => {
    // Carousel Control
    const carouselTempData = [
        {
            src: "/assets/carousel-test-1.png",
            alt: "Carousel-1",
            onClick: () => {},
        },
        {
            src: "/assets/carousel-test-2.png",
            alt: "Carousel-2",
            onClick: () => {},
        },
        {
            src: "/assets/carousel-test-3.png",
            alt: "Carousel-3",
            onClick: () => {},
        },
        {
            src: "/assets/carousel-test-4.png",
            alt: "Carousel-4",
            onClick: () => {},
        },
    ];

    // Infinity Scrolling 관련
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
        return <ProductGrid className="main-grid" products={products} />;
    };

    useEffect(() => {
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        observerRef.current = new IntersectionObserver(io);
        bottomObserver && observerRef.current.observe(bottomObserver.current);
    }, [isFetching]);

    return (
        <main>
            <Loader isLoading={isFetching}></Loader>
            <Carousel className="main-carousel">
                {carouselTempData.map((slide, idx) => {
                    return (
                        <Carousel.Item key={`slide-${idx}`} className={`slide`}>
                            <Photo
                                className="w-100 carousel-img"
                                objectFit="cover"
                                src={`${slide.src}`}
                                alt={`${slide.alt}`}
                            />
                        </Carousel.Item>
                    );
                })}
            </Carousel>
            {data ? getProducts() : ""}
            <div ref={bottomObserver}></div>
        </main>
    );
};

export default MainProductTemplate;
