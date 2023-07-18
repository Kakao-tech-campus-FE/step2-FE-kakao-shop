import React, { useEffect, useState, useRef } from 'react';
import { RootState, AppDispatch } from '@store/index';
import { useDispatch, useSelector } from 'react-redux';
import ProductGrid from '@components/organisms/ProductGrid';
import Loader from '@components/atoms/Loader';

import { getProducts } from '@store/slices/productSlice';
import { ProductInfoData } from '@api/dto';
import _ from 'lodash';

const MainPRoductTemplate = () => {
  const [page, setPage] = useState(0);
  const products = useSelector((state: RootState) => state.product.products);
  const isEnd = useSelector((state: RootState) => state.product.isEnd);
  const loading = useSelector((state: RootState) => state.product.loading);
  const dispatch = useDispatch<AppDispatch>();
  const bottomObserver = useRef(null);
  const [prevProduct, setPrevProduct] = useState<ProductInfoData[]>();
  const [currentProduct, setCurrentProduct] = useState<ProductInfoData[]>();

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
    setCurrentProduct(products);
    console.log(prevProduct, products);
  }, [products]);

  useEffect(() => {
    if (bottomObserver.current) {
      io.observe(bottomObserver.current); // 감시 선언
    }
  }, [io]);

  useEffect(() => {
    if (prevProduct !== undefined) setPrevProduct(_.uniqBy([...prevProduct, ...products], 'id'));
    else setPrevProduct(products);
    dispatch(getProducts(page));
    console.log('page: ', page);
  }, [dispatch, page]);

  return (
    <div className="flex flex-wrap justify-center gap-x-[30px]">
      {prevProduct && <ProductGrid products={prevProduct} loading={loading} setInvisibleCards={false} />}
      {loading || !currentProduct ? <Loader /> : <ProductGrid products={currentProduct} loading={loading} />}
      <div ref={bottomObserver} />
    </div>
  );
};

export default MainPRoductTemplate;
