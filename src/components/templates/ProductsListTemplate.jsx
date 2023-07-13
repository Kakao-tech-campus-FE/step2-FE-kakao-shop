import React, { Suspense } from 'react'
import { useInfiniteQuery } from 'react-query';
import getProducts from '../../api/getProducts';
import Loader from '../molecules/Loader';
import ProductsList from '../organisms/ProductsList';
import SubmitButton from '../atoms/SubmitButton';
import ColumnContainer from '../atoms/ColumnContainer';
import ProductCardSkeleton from '../molecules/ProductCardSkeleton';
import ListContainer from '../atoms/productsList/ListContainer';

const ProductsListTemplate = () => {
    const { 
        data: obj, 
        error,
        fetchNextPage,
        isFetching,
        isFetchingNextPage,
        hasNextPage,
        status 
      } = useInfiniteQuery(
        "products",
        ({ pageParam = 0  }) => getProducts(pageParam),
        {getNextPageParam: (lastPageData, allPages) => {
          if (lastPageData.data.response.length < allPages[0].data.response.length) {
              const hasNextPage = false;
              return undefined
            }
          const lastPage = parseInt((lastPageData.data.response.at(0).id - 1) / 9)
          return lastPage + 1
        }}
      )

    return (
      <ColumnContainer>
        {obj ? <ProductsList obj={obj} isLoading={isFetchingNextPage} /> : null}
        {isFetching 
          ? <ListContainer>
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </ListContainer>
          : null}

        <SubmitButton
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage || !hasNextPage}
          >더보기</SubmitButton>
      </ColumnContainer>
    )
}

export default ProductsListTemplate