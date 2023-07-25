import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../atoms/Container';
import ProductGrid from '../organisms/ProductGrid';
import Loader from '../atoms/Loader';
import { getProducts } from '../../services/product';

export default function MainProductTemplate() {
  const [page, setPage] = useState(0);
  const bottomObserver = useRef(null);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const isEnd = useSelector((state) => state.isEnd);

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isEnd) {
          setPage((prev) => prev + 1);
        }
      });
    },
    {
      threshold: 1,
    }
  );

  useEffect(() => {
    io.observe(bottomObserver.current);
  }, []);

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);

  return (
    <Container>
      {/* <Suspense fallback={<Loader />}> */}
      <ProductGrid products={products} />
      {/* </Suspense> */}
      <div ref={bottomObserver}></div>
    </Container>
  );
}
