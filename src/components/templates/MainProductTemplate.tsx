import React, { useEffect, useState, useRef } from 'react';
import { RootState, AppDispatch } from '@store/index';
import { useDispatch, useSelector } from 'react-redux';
import ProductGrid from '@components/organisms/ProductGrid';
import { getProducts } from '@store/slices/productSlice';
import { ProductInfoData } from '@api/dto';
import _ from 'lodash';

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);
  const products = useSelector((state: RootState) => state.product.products);
  const isEnd = useSelector((state: RootState) => state.product.isEnd);
  const loading = useSelector((state: RootState) => state.product.loading);
  const dispatch = useDispatch<AppDispatch>();
  const bottomObserver = useRef(null);
  const [allProduct, setAllProduct] = useState<ProductInfoData[]>();

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (loading) return;
        if (entry.isIntersecting && !isEnd) {
          console.log('bottom!');
          setPage(page + 1);
        }
      });
    },
    { threshold: 1 },
  );

  useEffect(() => {
    setAllProduct((prev) => {
      if (prev !== undefined) return [...prev, ...products];
      return products;
    });
  }, [products]);

  useEffect(() => {
    console.log(allProduct);
  }, [allProduct]);

  useEffect(() => {
    if (bottomObserver.current) {
      io.observe(bottomObserver.current); // 감시 선언
    }
  }, [io]);

  useEffect(() => {
    dispatch(getProducts(page));
    console.log('page: ', page);
  }, [dispatch, page]);

  return (
    <div className="flex flex-wrap justify-center gap-x-[30px]">
      {allProduct && <ProductGrid products={allProduct} loading={loading} />}
      <div ref={bottomObserver} />
    </div>
  );
};

export default MainProductTemplate;
