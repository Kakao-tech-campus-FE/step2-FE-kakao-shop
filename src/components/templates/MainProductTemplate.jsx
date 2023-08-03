import Container from "../atoms/Container"
import ProductGrid from "../organisms/ProductGrid"
import { useEffect} from "react"
import Loader from "../atoms/Loader"
import { fetchProducts } from '../../services/product';
import { useInfiniteQuery } from 'react-query'
import {useInView} from "react-intersection-observer"

const MainProductTemplate = () => {
  const {ref, inView} = useInView(false)
  const {
    data: products,
    isLoading: loading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(['products'], ({ pageParam = 0 }) => 
    fetchProducts(pageParam), 
    {
      getNextPageParam: (lastPage, pages) => {
        if(lastPage.data?.response.length === 0 ){
          return null
        }
        return pages.length
      },
      // Error 처리
      onError: (error) => {
        switch(error.status) {
          case 300: alert(`something went wrong 300:${error.message}`)
          break;
          case 400: alert(`something went wrong 400:${error.message}`)
          break;
          case 500: alert(`something went wrong 500:${error.message}`)
          break;
          default: alert(`something went wrong:${error.message}`)
        }
      }
    }
  );

  useEffect(() => {
    if(inView && hasNextPage){
      fetchNextPage();
    }
  },[inView])
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        alert("네트워크가 불안정합니다.");
      }
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [loading]);
  

  return (
    <Container className='inner' style={{marginLeft: '300px', marginRight: '300px'}}>
      {loading ? <Loader/> : (
        <ProductGrid products={products?.pages.flatMap((page) => page.data.response)}/>
      )}
      <div ref={ref}></div>
      {isFetchingNextPage && <Loader/>}
    </Container>
  )
}

export default MainProductTemplate
