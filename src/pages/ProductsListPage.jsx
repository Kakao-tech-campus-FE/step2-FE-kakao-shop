import React, { useState, useEffect, useRef } from 'react'
import { styled } from 'styled-components';
import ProductsList from 'components/organisms/ProductsList';
import ErrorFallback from "components/organisms/ErrorFallback";
import { ProductCardSkeleton } from 'components/molecules/ProductCard';
import Carousel from 'components/molecules/Carousel';
import Section from 'components/atoms/Section';

import useProductsListPage from 'hooks/useProductsListPage';
import repeat from 'utils/repeat';

const ProductsListPage = () => {

  const {
    data: listData, 
    isError, 
    fetchNextPage,
    isFetching,
    hasNextPage 
  } = useProductsListPage()

  const [next, setNext] = useState(true)
  const targetBox = useRef(null);

  
  useEffect(() => {

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) {return;}
        fetchNextPage();
      }, 
      { threshold: 0.1 }
    );

    if (hasNextPage) {
      io.observe(targetBox.current)
    }
    else if (hasNextPage === false) {     
      io.disconnect();
      setNext(prev => false);
    }

    return () => {io.disconnect();}
    
  }, [hasNextPage]) 


  return (

    <Section>
      <Carousel/>
      <ListContainer>
        {listData && <ProductsList data={listData} />}
                
        {isFetching 
          ? <>
              { repeat(9).map((e,i) => <ProductCardSkeleton key={i}/>) }
            </>
          : null}
      </ListContainer>
      {/* 로딩된 페이지 없을 때*/}
      {isError || (listData?.pages[0].length === 0 && !isFetching )
      ? <ErrorFallback errorMessage="페이지를 찾을 수 없습니다." /> : null} 

      {next && <div id="target" className='h-1' ref={targetBox}></div>}
    </Section>
  )
}

export default ProductsListPage

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  place-items: center;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
  margin: 0 auto;

  @media (max-width:768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`