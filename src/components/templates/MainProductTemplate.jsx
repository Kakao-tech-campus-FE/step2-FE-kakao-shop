import { useEffect, useRef, useState }  from 'react'
import Containor from '../atoms/Containor'
import Loader from '../molecules/Loader'
import ProductGrid from '../organisms/ProductGrid'
import { useInfinite } from '../../hooks/useInfinite'
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

  const {productData,isLoading,end,reRender,isError, errorMessage} = useInfinite(page)


  useEffect(()=>{
    if(!isLoading && !end && !isError){
      io.observe(bottomObserver.current)
    }

},[isLoading]) // 최초 렌더링 마운트 1회만 선언 

  useEffect(()=>{
    if(isError || end)
      io.unobserve(bottomObserver.current)

  },[isError,end]) //에러가 발생하거나, end가 true이면 더이상 bottomObserver는 관측 되지 않는다.


  return (
    <Containor>
      {isError ? <Toast>{errorMessage}</Toast> : isLoading && !reRender ? <Loader/> : <ProductGrid products={productData}/>}
      {/*에러가 났다면 에러 메시지를 띄우고 에러가 없다면 로딩상태 + 리랜더를 안해도 되면 Loader를 띄워주고, 
      로딩이 끝났거나 리랜더 해야 하는 상황이면 상품 목록을 랜더링 합니다*/}
      <div ref={bottomObserver}>1</div>
    </Containor>

    
  )
}

export default MainProductTemplate