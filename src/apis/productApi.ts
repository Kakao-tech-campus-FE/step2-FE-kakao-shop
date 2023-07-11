import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useGetProductsQuery = ({ page = 0 }: { page: number }) => {
  const fetcher = () => axios.get('/products', { params: { page } }).then(({ data }) => data.response);

  return useQuery({ queryKey: ['products', page], queryFn: fetcher });
};

export default useGetProductsQuery;
