import React, { Suspense, useEffect, useState, useRef } from 'react';
import { RootState, AppDispatch } from '@store/index';
import { useDispatch, useSelector } from 'react-redux';
import ProductGrid from '@components/organisms/ProductGrid';
import Loader from '@components/atoms/Loader';

import { getProducts } from '@store/slices/productSlice';

const MainPRoductTemplate = () => {
  const [page, setPage] = useState(0);
  const products = useSelector((state: RootState) => state.product.products);
  const isEnd = useSelector((state: RootState) => state.product.isEnd);
  const loading = useSelector((state: RootState) => state.product.loading);
  const dispatch = useDispatch<AppDispatch>();
  const bottomObserver = useRef(null);

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isEnd) {
          setPage(page + 1);
          console.log('page: ', page);
          window.scrollTo({ left: 0, top: 0 });
        }
      });
    },
    {
      threshold: 1,
    },
  );

  useEffect(() => {
    if (bottomObserver.current) {
      io.observe(bottomObserver.current); // 감시 선언
    }
  }, [bottomObserver]);

  useEffect(() => {
    console.log('loading: ', loading);
  }, [loading]);

  useEffect(() => {
    console.log('page:', page);
    dispatch(getProducts(page));
  }, [dispatch, page]);

  return (
    <Suspense fallback={<Loader />}>
      <div ref={bottomObserver}>
        <ProductGrid products={products} loading={loading} />
      </div>
    </Suspense>
  );
};

export default MainPRoductTemplate;
