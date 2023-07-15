import React, { useState, useRef, useEffect } from 'react'
import { useInfiniteQuery } from 'react-query';
import getProducts from '../../api/getProducts';
import ProductsList from '../organisms/ProductsList';
import SubmitButton from '../atoms/SubmitButton';
import ColumnContainer from '../atoms/ColumnContainer';
import ProductCardSkeleton from '../molecules/ProductCardSkeleton';
import ListContainer from '../atoms/productsList/ListContainer';
import repeat from '../../utils/repeat';
import ErrorBox from "../organisms/ErrorBox";

const ProductsListTemplate = () => {
    
    const { 
        data: obj, 
        isError, error,
        fetchNextPage,
        isFetching,
        isFetchingNextPage,
        hasNextPage,
      } = useInfiniteQuery(
        "products",
        ({ pageParam = 0  }) => getProducts(pageParam),
        {getNextPageParam: (last, allPages) => {

          if (allPages[0].data.response.length === 0 
            || last.data.response.length < allPages[0].data.response.length) {
            const hasNextPage = false;
            return undefined
          }

          const lastPage = parseInt((last.data.response[0].id - 1) / 9);
          return lastPage + 1
        }}
      )

    const [next, setNext] = useState(true)
    const io = new IntersectionObserver(
        (entries, observer) => {
          if (!entries[0].isIntersecting) return;
          
          fetchNextPage();
        }, 
        {threshold: 1}
      );
    const targetBox = useRef(null);

    useEffect(()=>{
      if (hasNextPage) {io.observe(targetBox.current)}

      else if (hasNextPage === false) {     
        io.disconnect();
        setNext(prev => false);
      }

    }, [hasNextPage]) 

    return (
      <ColumnContainer>
        {obj && 
          <ProductsList obj={obj} isLoading={isFetchingNextPage} />}
        
        {isFetching 
          ? <ListContainer>
              {repeat(9).map((e,i) => {return <ProductCardSkeleton key={i}/>})}
            </ListContainer>
          : null}

        {obj?.pages[0].data.response.length === 0 && !isFetching 
        ? <ErrorBox errorMessage="페이지를 찾을 수 없습니다." /> : null} 

        {next &&
          <div id="target" ref={targetBox}></div>}

      </ColumnContainer>
    )
}

export default ProductsListTemplate