import { useQuery } from 'react-query';
import Container from "../atoms/Container"
import ProductGrid from "../organisms/ProductGrid"
import { Suspense, useEffect, useRef, useState } from "react"
import Loader from "../atoms/Loader"
import { fetchProducts } from '../../services/product';


const MainProductTemplate = () => {
  const [bottom, setBottom] = useState(false);
  const [page,setPage] = useState(0)
  const bottomObserver = useRef(null)
  const { 
    data: products, 
    isLoading: loading,
    error,   
  } = useQuery(['products'], () =>
    fetchProducts(page),
  );

  useEffect(() => {
    fetchProducts(page);
  }, [page])

  useEffect(()=>{
    if(products && products?.data.response.length <10){
      setBottom(true)
    }
  },[products])

  useEffect(()=>{
    const io = new IntersectionObserver((entries, observer) =>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting && !bottom){
          // 임계점 퍼센트만큼 보이면 해당 코드 실행 
          setPage((prevPage) => prevPage + 1);
          console.log(entry)
        }
      })
    },{
        threshold: 0.5,
      }
    )
    if(bottom){
      io.unobserve(bottomObserver.current)
    } else{
      io.observe(bottomObserver.current)
    }
    
  }
  ,[]) // 최초 렌더링때 1번만 선언 

  
  return (
    <Container>
        {/* <Suspense fallback={<Loader/>}> */}
          {loading ? <Loader/> : (
            <ProductGrid products={products}/>
          )}
          <div ref={bottomObserver}></div>
        {/* </Suspense> */}
    </Container>
  )
}

export default MainProductTemplate
