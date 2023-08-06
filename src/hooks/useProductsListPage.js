
import { useInfiniteQuery } from 'react-query';
import { getProducts } from 'api/product';

const useProductsListPage = () => {
  const query = useInfiniteQuery(
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

  return [
    query.data, 
    query.isError, 
    query.fetchNextPage,
    query.isFetching,
    query.hasNextPage
  ]
}

export default useProductsListPage