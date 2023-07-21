import React, { useState, useRef, useEffect } from 'react'
import { useInfiniteQuery } from 'react-query';
import getProducts from '../../api/getProducts';
import ProductsList from '../organisms/ProductsList';
import MainContainer from '../atoms/MainContainer';
import ProductCardSkeleton from '../molecules/ProductCardSkeleton';
import ListContainer from '../atoms/productsList/ListContainer';
import repeat from '../../utils/repeat';
import ErrorFallback from "../organisms/ErrorFallback";


const ProductsListTemplate = () => {

    const { 
        data: listData, 
        isError, error,
        fetchNextPage,
        isFetching,
        hasNextPage,
      } = useInfiniteQuery(
        "products",
        ({ pageParam = 0 }) => getProducts(pageParam),
        {getNextPageParam: (last, allPages) => {
          if (allPages[0].length === 0 
            || last.length < allPages[0].length) {
            return undefined
          }

          const lastPage = parseInt((last[0].id - 1) / 9);
          return lastPage + 1
        }}
      )
      
    const [next, setNext] = useState(true)

    const io = new IntersectionObserver(
        (entries) => {
          if (!entries[0].isIntersecting) {return;}
          fetchNextPage();
        }, 
        {threshold: 0.1}
      );

    const targetBox = useRef(null);
    useEffect(()=>{
      if (hasNextPage) {io.observe(targetBox.current)}
      else if (hasNextPage === false) {     
        io.disconnect();
        setNext(prev => false);
      }
      return () => {io.disconnect();}
    }, [hasNextPage]) 

    return (
      <MainContainer direction={"column"}>
        <ListContainer>
          {listData && <ProductsList obj={listData} />}
                  
          {isFetching 
            ? <>
                {repeat(9).map((e,i) => {return <ProductCardSkeleton key={i}/>})}
              </>
            : null}
        </ListContainer>
        {/* 로딩된 페이지 없을 때*/}
        {isError || (listData?.pages[0].length === 0 && !isFetching )
        ? <ErrorFallback errorMessage="페이지를 찾을 수 없습니다." /> : null} 

        {next && <div id="target" className='h-1' ref={targetBox}></div>}

      </MainContainer>
    )
}

export default ProductsListTemplate