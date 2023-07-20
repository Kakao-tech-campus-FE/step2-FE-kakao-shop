import { useEffect, useRef, useState }  from 'react'
import Containor from '../atoms/Containor'
import Loader from '../molecules/Loader'
import { useQuery, QueryClient, useQueryClient } from 'react-query'
import { getProductById, fetchProducts} from '../../services/product'
import ProductGrid from '../organisms/ProductGrid'
import { useInfinite } from '../../hooks/useInfinite'
import { isError } from 'lodash'
import Toast from '../molecules/Toast'


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
    threshold: 0.1,
  })

  // const {isLoading, data, error, isError} = useQuery(['/products',page], () => {return fetchProducts('/products',page)})
  const {productData,isLoading,end,reRender,isError, errorMessage} = useInfinite(page)


  useEffect(()=>{
    if(!isLoading && !end && !isError){
      io.observe(bottomObserver.current)
    }
},[isLoading]) // 최초 렌더링 마운트 1회만 선언 




  console.log(isError)

  return (
    <Containor>
      {/* <Suspense fallback={<Loader/>}>
        <ProductGrid products={data.data.response}/> 
      </Suspense>
      {isError ? console.log(error) : "?" } */}
      {isError ? <Toast>{errorMessage}</Toast> : isLoading && !reRender ? <Loader/> : <ProductGrid products={productData}/>}
      {isError ? ' ' : <div ref={bottomObserver}></div> }
    </Containor>
    
  )
}

export default MainProductTemplate