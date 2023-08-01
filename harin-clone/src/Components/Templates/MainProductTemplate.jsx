import { useDispatch, useSelector } from "react-redux";
import Container from "../Atoms/Container";
import ProductGrid from "../Organisms/ProductGrid";
import { useEffect, useState, useRef } from "react";
import { getProducts } from "../../Store/Slices/productSlice";
import Loader from "../Atoms/Loader";
import { useInfiniteQuery } from "@tanstack/react-query";
import SkeletonItem from "../Molecules/SkeletonItem";
import MainCarousel from "../Atoms/MainCarousel";

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);
  const bottomObserver = useRef(null);
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const isEnd = useSelector((state) => state.product.isEnd);

  useEffect(() => {
    if (!loading) {
      const io = new IntersectionObserver(
        (entries, io) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && isEnd) {
              setPage((page) => page + 1);
              io.unobserve(bottomObserver.current);
            } else return;
          });
        },
        {
          threshold: 1,
        }
      );
      if (bottomObserver.current) {
        io.observe(bottomObserver.current);
      }
    }
  }, [isEnd, loading]);

  useEffect(() => {
    if (page < 2) {
      dispatch(getProducts(page));
    }
  }, [dispatch, page]);

  if (error) {
    return <span>Error!</span>;
  }
  if (loading) {
    return <SkeletonItem />;
  }

  return (
    <div>
      <MainCarousel />
      <Container className="mt-12">
        <ProductGrid products={products} />
        <div ref={bottomObserver}></div>
      </Container>
    </div>
  );
};

export default MainProductTemplate;
