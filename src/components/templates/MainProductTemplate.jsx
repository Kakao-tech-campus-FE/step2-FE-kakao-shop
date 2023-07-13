import { useEffect, useRef, useState }  from 'react'
import Containor from '../atoms/Containor'
import Loader from '../molecules/Loader'
import { useQuery, QueryClient, useQueryClient } from 'react-query'
import { getProductById, fetchProducts} from '../../services/product'
import ProductGrid from '../organisms/ProductGrid'
import { useInfinite } from '../../hooks/useInfinite'



function MainProductTemplate() {

  const [page, setPage] = useState(0)

  const bottomObserver = useRef(null)

  const io = new IntersectionObserver((entries, observer)=>{
    entries.forEach((entry)=>{
      if (entry.isIntersecting){
        setPage(page+1)
      }
    })
  },{
    threshold: 0.3,
  })

  // const {isLoading, data, error, isError} = useQuery(['/products',page], () => {return fetchProducts('/products',page)})
  const {productData,isLoading,end,reRender} = useInfinite(page)


  useEffect(()=>{
    if(!isLoading && !end){
      io.observe(bottomObserver.current)
    }
},[isLoading]) // 최초 렌더링 마운트 1회만 선언 

  return (
    <Containor>
      {/* <Suspense fallback={<Loader/>}>
        <ProductGrid products={data.data.response}/> 
      </Suspense>
      {isError ? console.log(error) : "?" } */}
      {isLoading && !reRender ? <Loader/> : <ProductGrid products={productData}/> }
      <div ref={bottomObserver}></div>
    </Containor>
    
  )
}

export default MainProductTemplate