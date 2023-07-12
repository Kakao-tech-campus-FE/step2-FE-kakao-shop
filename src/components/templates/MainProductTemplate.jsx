import { useRef, useState }  from 'react'
import Containor from '../atoms/Containor'
import Loader from '../molecules/Loader'
import { useQuery } from 'react-query'
import { getProductById, fetchProducts} from '../../services/product'
import ProductGrid from '../organisms/ProductGrid'


function MainProductTemplate() {
  // const [page, setPage] = useState(0)

  // const bottomObserver = useRef(null)
  // const io = new IntersectionObserver((entries, observer)=>{
  //   entries.forEach((entry)=>{
  //     if (entry.isIntersecting){
  //       setPage((page) => page + 1)
  //     }
  //   })
  // },{
  //   threshold: 0.5,
  // })

  const page = 0

  const {isLoading, data, error, isError} = useQuery(['/products',page], () => {return fetchProducts('/products',0)})



  return (
    <Containor>
      {/* <Suspense fallback={<Loader/>}>
        <ProductGrid products={data.data.response}/> 
      </Suspense> */}
      {isError ? console.log(error) : "?" }
      {isLoading ?<Loader/> :  <ProductGrid products={data.data.response}/> }
      {/* <div ref={bottomObserver}></div> */}
    </Containor>
    
  )
}

export default MainProductTemplate