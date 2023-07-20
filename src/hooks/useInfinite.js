import { useState,useEffect } from "react"
import { useQuery, QueryClient, useQueryClient } from 'react-query'
import { getProductById, fetchProducts} from '../services/product'
import _ from "lodash"

  

export const useInfinite = (page) => {  
  const [productData, setProductData] = useState([]) //컴포넌트에 전달할 Products 배열을 관리하는 상태 값입니다
  const [end, setEnd] = useState(false) //마지막 페이지에 다달았을때, 더이상 API요청을 안하도록하는 상태 값입니다
  const [reRender, setReRender] = useState(false) //이전 데이터 값과 다른 값이 리턴 값으로 전달될 때만 Render하기 위해 만든 상태

  const {isLoading, data, error, isError} = useQuery(['/products',page], () => {return fetchProducts('/products',page)})

  if(isError){
    const status = error.response.status
    let errorMessage = ""
    if(status === 404)
      errorMessage = "요청 페이지 URL이 잘 못 됐습니다"
    else if(status === 400)
      errorMessage = "요청 request에 문제가 있습니다."
    else if(status === 401)
      errorMessage = "인증 되지 않은 요청입니다."

    return {productData, isLoading, end, reRender, isError, errorMessage} 
  }
  if(!isLoading && !end){ //로딩이 다 됐고, 마지막 페이지가 아니라면 아래 구문을 실행합니다

    if(data.data.response.length < 9){ //서버에서 받은 배열의 크기가 10 미만이면 마지막 페이지라고 설정한다
      setEnd(true)
    }
    const uniqProducts = _.uniqBy([...productData, ...data.data.response],'id')
    if(!_.isEqual(uniqProducts,productData)){ //가공한 데이터와 이전 데이터가 다르면
      setProductData(uniqProducts) //데이터 값을 업데이트 하도록 했습니다.
      setReRender(true) //리 렌더링을 하게끔 한다
    }
  }


  return {productData,isLoading,end,reRender,isError} 
}