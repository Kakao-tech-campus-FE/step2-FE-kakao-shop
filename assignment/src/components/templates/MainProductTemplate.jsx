import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../atoms/Container';
import { getProducts } from '../../store/slices/productSlice';
import ProductGrid from '../organisms/ProductGrid';
import Loader from '../atoms/Loader';

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);
  const bottomObserver = useRef(null);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const isEnd = useSelector((state) => state.products.isEnd);

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        if (entry.isIntersecting && isEnd) {
          setPage((page) => page + 1);
        }
      });
    },
    {
      threshold: 0.5,
    },
  );

  useEffect(() => {
    io.observe(bottomObserver.current);
  }, []);

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);

  return (
    <Container>
      <ProductGrid products={products} loading={loading} />
      <div ref={bottomObserver} />
      {/* <Loader /> */}
    </Container>
  );
};

export default MainProductTemplate;
