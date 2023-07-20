import { styled } from 'styled-components';
import getProducts from '../api/Main';
import { useInfiniteQuery } from 'react-query';
import ProductCard from '../components/Main/molecules/ProductCard';
import Spinner from '../components/common/atoms/Spinner';

function Main() {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(['getProducts'], ({ pageParam = 0 }) => getProducts(pageParam), {
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length;
      return lastPage.response.length !== 9 ? undefined : nextPage;
    },
    suspense: true,
  });
  return (
    <>
      <Wrap>
        {data &&
          data.pages.map(({ response }) =>
            response.map((product, index, { length }) => (
              <ProductCard
                key={product.id}
                isLast={length - 1 === index}
                hasNext={hasNextPage}
                fetchNextPage={fetchNextPage}
                name={product.productName}
                image={process.env.REACT_APP_API_URL + product.image}
                description={product.description}
                price={product.price}
              />
            ))
          )}
      </Wrap>
      {isFetchingNextPage && <Spinner width={60} height={60} />}
    </>
  );
}

export default Main;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
