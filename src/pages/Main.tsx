import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { getProducts } from '../api/Main';
import { useQuery } from 'react-query';
import ProductCard from '../components/Main/molecules/ProductCard';
import { Product } from '../types/Product';

function Main() {
  const [page, setPage] = useState<number>(0);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const { data } = useQuery(['getProducts', page], () => getProducts(page), {
    onSuccess: (data) => {
      console.log(data.response);
      if (!data.response.length) {
        setIsLast(true);
      }
    },
    onError: (error) => {
      throw new Error('상품데이터 요청에 실패하였습니다');
    },
    suspense: true,
    enabled: !isLast,
  });

  useEffect(() => {
    if (data) {
      setProducts((prev) => [...prev, ...data.response]);
    }
  }, [data]);

  return (
    <Wrap>
      {products.map((product, index, { length }) => (
        <ProductCard
          key={product.id}
          isLast={length - 1 === index}
          setPage={setPage}
          name={product.productName}
          image={process.env.REACT_APP_API_URL + product.image}
          description={product.description}
          price={product.price}
        />
      ))}
    </Wrap>
  );
}

export default Main;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
